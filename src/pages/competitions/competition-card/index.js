import React from 'react';

import './index.scss'

export default class CompetitionCard extends React.Component {
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

    render() {
        return (
            <div className="competition-card">
                <div className="icon">
                    <img src={this.props.competition.icon} alt={this.props.competition.name}/>
                </div>
                <div className="title">
                    <span>{this.props.competition.name}</span>
                </div>
                <this.registerElement />
            </div>
        );
    }
}