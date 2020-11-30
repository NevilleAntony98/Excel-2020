import {Component} from 'react';
import axios from 'axios';
import DropDown from 'react-dropdown';

import DeadEnd from '../../../components/DeadEnd';
import CompetitionCard from '../competition-card';

import 'react-dropdown/style.css';
import './index.scss';

export default class CompetitionsGrid extends Component {
  state = {
    // Sort type: name, datetime
    sortType: 'name',

    filters: {
      category: 'All',
      needRegistration: 'All'
    },

    categories: [],

    competitions: [],

    loadingDone: false
  };

  constructor(props) {
    super(props);

    // Sort => Name: name, Time: datetime
    this.sortOptions = ['Name', 'Time'];
    this.categoryOptions = ['All'];
  }

  getCompetitions = async () => {
    axios
      .get('https://staging.apis.excelmec.org/events/api/events/type/competition')
      .then(data => this.setState({competitions: data.data, loadingDone: true}))
      .catch(err => {
        console.log(err);
        return null;
      });
  };

  getCategories = () => {
    axios
      .get('https://staging.apis.excelmec.org/events/api/constants')
      .then(data => {
        this.setState({categories: [...data.data.category]});

        this.state.categories.forEach(category => {
          let words = category.split('_');
          let word = words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
          this.categoryOptions.push(word);
        });
      })
      .catch(err => {
        console.log(err);
        return null;
      });
  };

  componentDidMount() {
    this.getCompetitions();
    this.getCategories();
  }

  sortCompetitions = (a, b) => (a[this.state.sortType] > b[this.state.sortType] ? 1 : -1);

  filterCompetitions = () => {
    let competitions = this.state.competitions.slice();

    Object.keys(this.state.filters).forEach(key => {
      if (this.state.filters[key] === 'All') return true;

      competitions = competitions.filter(competition => competition[key] === this.state.filters[key]);
    });

    return competitions;
  };

  CompetitionCardsContainer = () => {
    let competitions = this.filterCompetitions();

    if (!this.state.loadingDone)
      return (
        <div className="loading-container">
          <div className="image-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19.957 4.035A14.567 14.567 0 0018.945 4C11.778 4 7.697 9.464 6.213 13.861l3.939 3.938C14.676 16.18 20 12.25 20 5.16c0-.367-.014-.741-.043-1.125zM10.559 15.85l-2.402-2.402c1.018-2.383 3.91-7.455 10.166-7.767-.21 4.812-3.368 8.276-7.764 10.169zm4.559 1.282c-.456.311-.908.592-1.356.842-.156.742-.552 1.535-1.126 2.21-.001-.48-.135-.964-.369-1.449-.413.187-.805.348-1.179.49.551 1.424-.01 2.476-.763 3.462 1.08-.081 2.214-.61 3.106-1.504.965-.962 1.64-2.352 1.687-4.051zM5.269 11.74c-.482-.232-.965-.364-1.443-.367.669-.567 1.453-.961 2.188-1.121.262-.461.556-.915.865-1.361-1.699.046-3.09.723-4.054 1.686-.893.893-1.421 2.027-1.503 3.106.986-.753 2.039-1.313 3.463-.762.145-.391.305-.785.484-1.181zm6.448.553a.832.832 0 010-1.178.833.833 0 110 1.178zm4.124-4.125a1.667 1.667 0 10-2.356 2.359 1.667 1.667 0 002.356-2.359zM14.25 9.76a.583.583 0 11.824-.825.583.583 0 01-.824.825zM1.641 20.315l-.755-.755 4.341-4.323.755.755zm4.148 1.547l-.755-.755 3.03-3.054.756.755zM.755 24L0 23.245l5.373-5.364.756.755z" />
            </svg>
          </div>
        </div>
      );

    if (competitions.length === 0)
      return (
        <DeadEnd title={'Nothing to see here'} subtitle={'Chose a different category to view more events!'} />
      );

    return (
      <div className="competition-cards-container">
        {competitions.sort(this.sortCompetitions).map(competition => (
          <CompetitionCard key={competition.id} competition={competition} />
        ))}
      </div>
    );
  };

  onSortOptionChanged = option => {
    // Sort => Name: name, Time: datetime
    let key = 'name';

    switch (option.label) {
      default:
      case 'Name':
        key = 'name';
        break;
      case 'Time':
        key = 'datetime';
        break;
    }

    this.setState({sortType: key});
  };

  onCategoryOptionChanged = option => {
    let value = 'All';

    if (option.label !== 'All') value = option.label.toLowerCase().replace(' ', '_');

    this.setState(prevState => {
      let state = Object.assign({}, prevState);
      state.filters.category = value;
      return state;
    });
  };

  render() {
    return (
      <div className="competition-grid">
        <div className="sort-filter-box">
          <DropDown
            options={this.sortOptions}
            onChange={this.onSortOptionChanged}
            placeholder="Name"
            className="drop-down"
          />
          <DropDown
            options={this.categoryOptions}
            onChange={this.onCategoryOptionChanged}
            placeholder="Category"
            className="drop-down"
          />
        </div>
        <this.CompetitionCardsContainer />
      </div>
    );
  }
}
