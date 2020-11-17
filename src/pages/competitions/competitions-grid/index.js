import React from 'react';
import axios from 'axios';

import DropDown from 'react-dropdown';
import CompetitionCard from '../competition-card';

import 'react-dropdown/style.css';
import './index.scss'

export default class CompetitionsGrid extends React.Component {
    state = {
        // Sort type: name, datetime
        sortType: "name",

        filters: {
            category: "All",
            needRegistration: "All"
        },

        competitions: [],

        loadingDone: false
    }

    getCompetitions = async () => {
        axios.get("https://staging.apis.excelmec.org/events/api/events/type/competition")
            .then(data => this.setState({competitions: data.data, loadingDone: true}))
            .catch(err => {
                console.log(err)
                return null
            });
    };

    componentDidMount() {
        this.getCompetitions()
    }

    sortCompetitions = (a, b) => a[this.state.sortType] > b[this.state.sortType] ? 1 : -1

    filterCompetitions = () => {
        let competitions = this.state.competitions.slice()

        Object.keys(this.state.filters).forEach((key) => {
            if (this.state.filters[key] === "All")
                return true

            competitions = competitions.filter(competition => competition[key] === this.state.filters[key])
        })

        return competitions
    }

    CompetitionCardsContainer = () => {
        let competitions = this.filterCompetitions ()

        if (!this.state.loadingDone)
            return("loading")

        if (competitions.length === 0)
            return(
                <div className="dead-end-container">
                    <svg className="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.996 295.996"><defs/><path d="M147.998 0C66.392 0 0 66.392 0 147.998s66.392 147.998 147.998 147.998 147.998-66.392 147.998-147.998S229.605 0 147.998 0zm0 279.996c-36.256 0-69.143-14.696-93.022-38.44a132.713 132.713 0 01-23.934-32.42C21.442 190.847 16 170.047 16 147.998 16 75.214 75.214 16 147.998 16c34.523 0 65.987 13.328 89.533 35.102 12.208 11.288 22.289 24.844 29.558 39.996 8.27 17.239 12.907 36.538 12.907 56.9 0 72.784-59.214 131.998-131.998 131.998z"/><circle cx="99.666" cy="114.998" r="16"/><circle cx="198.666" cy="114.998" r="16"/><path d="M147.715 229.995c30.954 0 60.619-15.83 77.604-42.113l-13.439-8.684c-15.597 24.135-44.126 37.604-72.693 34.308-22.262-2.567-42.849-15.393-55.072-34.308l-13.438 8.684c14.79 22.889 39.716 38.409 66.676 41.519 3.461.399 6.917.594 10.362.594z"/></svg>
                    <span className="title">
                        Nothing to see here
                    </span>
                    <span className="subtitle">
                        Chose a different category to view more events!
                    </span>
                </div>
            )

        return(
            <div className="competition-cards-container">{
                competitions.sort(this.sortCompetitions)
                    .map((competition) =>
                        <CompetitionCard key={competition.id} competition={competition}/>
                    )
            }</div>
        )
    }

    onSortOptionChanged = (option) => {
        // Sort => Name: name, Time: datetime
        let key = "name"

        switch (option.label) {
            default:
            case "Name":
                key = "name"
                break
            case "Time":
                key = "datetime"
                break
        }

        this.setState({sortType: key})
    }

    onCategoryOptionChanged = (option) => {
        let value = "All"

        switch (option.label) {
            case "General Tech":
                value = "general_tech"
                break;
            case "Computer Science":
                value = "computer_science"
                break;
            case "Non Tech":
                value = "non_tech"
                break;
            default:
                value = "All"
        }

        this.setState(prevState => {
            let state = Object.assign({}, prevState)
            state.filters.category = value
            return state
        })
    }

    render() {
        // Sort => Name: name, Time: datetime
        let sortOptions = [ "Name", "Time" ]
        let categoryOptions = ["All", "Computer Science", "General Tech", "Non Tech"]

        return (
            <div className="competition-grid">
                <div className="sort-filter-box">
                    <DropDown
                        options={sortOptions}
                        onChange={this.onSortOptionChanged}
                        placeholder="Name"
                        className="drop-down"c
                    />
                    <DropDown
                        options={categoryOptions}
                        onChange={this.onCategoryOptionChanged}
                        placeholder="Category"
                        className="drop-down"
                    />
                </div>
                <this.CompetitionCardsContainer />
            </div>
        )
    }
}