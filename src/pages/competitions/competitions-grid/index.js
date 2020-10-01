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

        // Filter by category, eventType, needRegistration, none
        // Filter key depends on each category. eg: filter type: "category" and filter key: "general_tech"
        filterType: "none",
        filterKey: "none",

        competitions: []
    }

    getCompetitions = async () => {
        axios.get("https://staging.apis.excelmec.org/events/api/events")
            .then(data => this.setState({competitions: data.data}))
            .catch(err => {
                console.log(err);
                return null;
            });
    };

    componentDidMount() {
        this.getCompetitions();
    }

    sortCompetitions = (a, b) => {
        return a[this.state.sortType] > b[this.state.sortType] ? 1 : -1;
    }

    filterCompetitions = (competition) => {
        if (this.state.filterType === "none" || this.state.filterKey === "none")
            return true;

        return competition[this.state.filterType] === this.state.filterKey;
    }

    CompetitionCardsContainer = () => {
        return (
            <div className="competition-cards-container"> {
                this.state.competitions.filter(this.filterCompetitions)
                    .sort(this.sortCompetitions)
                    .map((competition) => {
                        return <CompetitionCard key={competition.id} competition={competition}/>
                    })
            } </div>
        )
    }

    onSortDropDownChanged = (option) => {
        // Sort => Name: name, Time: datetime
        let key = "name"

        switch (option.label) {
            default:
            case "Name":
                key = "name";
                break;
            case "Time":
                key = "datetime";
                break;
        }

        this.setState({sortType: key})
    }

    render() {
        // Sort => Name: name, Time: datetime
        let sortOptions = [ "Name", "Time" ]
        // Filter => None: none, Category: category, Event Type: eventType, Registration: needRegistration
        // TODO

        return (
            <div className="competition-grid">
                <div className="sort-filter-box">
                    <DropDown
                        options={sortOptions}
                        onChange={this.onSortDropDownChanged}
                        placeholder="Sort"
                        className="drop-down"
                    />
                </div>
                <this.CompetitionCardsContainer />
            </div>
        )
    }
}