import {Component} from 'react';
import axios from 'axios';
import DropDown from 'react-dropdown';

import Loader from '../../../components/Loader';
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
      .get('https://staging.events.excelmec.org/api/events/type/competition')
      .then(data => {
          let promises = []

          data.data.forEach((event) => {
            promises.push(axios.get("https://staging.events.excelmec.org/api/events/" + event.id))
          })

          Promise.all(promises).then((responses) => {
            let competitionsData = []
            responses.forEach((response) => {
              competitionsData.push(response.data)
            })

            this.setState({competitions: competitionsData, loadingDone: true})
          })
      })
      .catch(err => {
        console.log(err);
        return null;
    });
  };

  getCategories = () => {
    axios
      .get('https://staging.events.excelmec.org/api/constants')
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

    if (!this.state.loadingDone) return <Loader />;

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
            placeholder="Sort By"
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
