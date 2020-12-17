import {Component} from 'react';
import Popup from 'reactjs-popup';
import {Spring, config} from 'react-spring/renderprops';

import './index.scss';

import CompetitionPopup from '../competition-popup';

import excelIcon from '../../../assets/png/excel2020.png';

export default class CompetitionCard extends Component {
  state = {
    imageIsReady: false
  };

  componentDidMount() {
    const img = new Image();
    img.src = this.props.competition.icon;

    img.onload = () => {
      this.setState({imageIsReady: true});
    };
  }

  PlaceholderIcon = () => {
    return <img src={excelIcon} alt={this.props.competition.name} />;
  };

  CompetitionIcon = () => {
    return (
      <Spring
        from={{transform: 'rotateY(360deg)'}}
        to={{transform: 'rotateY(0deg)'}}
        config={{tension: 200, friction: 40}}>
        {props => (
          <div style={props}>
            <img src={this.props.competition.icon} alt={this.props.competition.name} />
          </div>
        )}
      </Spring>
    );
  };

  getSanitizedString = (string) => string.replaceAll('\\\\n', '\n');

  render() {
    return (
      <Spring from={{opacity: 0, marginTop: -50}} to={{opacity: 1, marginTop: 0}} config={config.wobbly}>
        {props => (
          <div style={props}>
            <Popup
              trigger={
                <div className="competition-card">
                  <div className="icon">
                    {!this.state.imageIsReady ? <this.PlaceholderIcon /> : <this.CompetitionIcon />}
                  </div>
                  <div className="title">
                    <span>{this.props.competition.name}</span>
                  </div>
                  <i className="description">
                    { this.getSanitizedString(this.props.competition.about) }
                  </i>
                </div>
              }
              modal>
              {close => (
                <CompetitionPopup
                  competition={this.props.competition}
                  closeFunc={close}
                />
              )}
            </Popup>
          </div>
        )}
      </Spring>
    );
  }
}
