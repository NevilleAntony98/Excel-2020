import React from 'react';
import { Spring, config } from 'react-spring/renderprops';

import './index.scss'

const excelIcon = require('../../../data/images/excel2020.png')

export default class CompetitionCard extends React.Component {
    state = {
        imageIsReady: false
    }

    onRegisterClicked = () => {
        console.log("Register clicked for " + this.props.competition.name);
    }

    registerElement = () => {
        if (this.props.competition.needRegistration)
            return (
                <button onClick={this.onRegisterClicked} className="register-button">
                    <span>Register</span>
                </button>
            )

        return (
            <span className="no-registration">
                <i>No Registeration</i>
            </span>
        )
    }

    componentDidMount() {
        const img = new Image()
        img.src = this.props.competition.icon

        img.onload = () => {
            this.setState({ imageIsReady: true });
          }
    }

    PlaceholderIcon = () => {
        return(
            <img src={excelIcon} alt={this.props.competition.name}/>
        )
    }

    CompetitionIcon = () => {
        return(
            <Spring
            from={{ transform: 'rotateY(360deg)' }}
            to={{ transform: 'rotateY(0deg)' }}
            config={{ tension: 200, friction: 40 }}>
                {props => (
                    <div style={props}>
                        <img src={this.props.competition.icon} alt={this.props.competition.name}/>
                    </div>
                )}
            </Spring>
        )
    }

    render() {

        return (
            <Spring
            from={{ opacity: 0, marginTop: -50}}
            to={{ opacity: 1, marginTop: 0 }}
            config={config.wobbly}
            >
                {props => (
                    <div style={props}>
                        <div className="competition-card">
                            <div className="icon">
                                {!this.state.imageIsReady ?
                                <this.PlaceholderIcon /> :
                                <this.CompetitionIcon />}
                            </div>
                            <div className="title">
                                <span>{this.props.competition.name}</span>
                            </div>
                            <this.registerElement />
                        </div>
                    </div>
                )}
            </Spring>
        );
    }
}