import { createRef, Component } from 'react';

import './index.scss';

export default class CompetitionPopup extends Component {
    state = {
        activeSection: "About",
    }

    constructor(props) {
        super(props);

        this.divRef = createRef();
    }

    componentDidUpdate() {
        // To reset scroll when stack content is changed
        this.divRef.current.scrollTop = 0;
    }

    getSanitizedString = (string) => {
        return string.replaceAll('\\\\n', '\n')
    }

    onAboutClicked = () => {
        this.setState({
            activeSection: "About"
        })
    }

    onFormatClicked = () => {
        this.setState({
            activeSection: "Format"
        })
    }

    onRulesClicked = () => {
        this.setState({
            activeSection: "Rules"
        })
    }

    onContactClicked = () => {
        this.setState({
            activeSection: "Contact"
        })
    }

    onRegisterClicked = () => {
        window.open("https://www.youtube.com/watch?v=oHg5SJYRHA0", "_blank")
    }

    AboutSection = () => {
        return(
            <div className="about-section section">
                {this.getSanitizedString(this.props.competition.about)}
            </div>
        )
    }

    FormatSection = () => {
        return(
            <div className="format-section section">
                {this.getSanitizedString(this.props.competition.format)}
            </div>
        )
    }

    RulesSection = () => {
        return(
            <div className="rules-section section">
                {this.getSanitizedString(this.props.competition.rules)}
            </div>
        )
    }

    ContactSection = () => {
        return(
            <div className="contact-section section">
                {this.props.competition.eventHead1 !== null &&
                <div>
                    <span className="name">{this.props.competition.eventHead1.name}</span>
                    <a className="email" href={"mailto:" + this.props.competition.eventHead1.email}>{this.props.competition.eventHead1.email}</a>
                    <span className="phone">{this.props.competition.eventHead1.phoneNumber}</span>
                </div>}
                {this.props.competition.eventHead2 !== null &&
                <div>
                    <span className="name">{this.props.competition.eventHead2.name}</span>
                    <a className="email" href={"mailto:" + this.props.competition.eventHead2.email}>{this.props.competition.eventHead2.email}</a>
                    <span className="phone">{this.props.competition.eventHead2.phoneNumber}</span>
                </div>}
            </div>
        )
    }

    render() {
        return(
            <div className="popup-content-container">
                <div className="popup-sidebar">
                    <img className="competition-image" src={this.props.competition.icon} alt={this.props.competition.name}/>
                    <span className="name">{this.props.name}</span>
                    <button className="register-button" onClick={this.onRegisterClicked}>Register</button>
                    <div className="popup-stack-switcher">
                        <ul className="popup-nav">
                            <li className={this.state.activeSection === "About" ? "active" : ""} onClick={this.onAboutClicked}>About</li>
                            <li className={this.state.activeSection === "Format" ? "active" : ""} onClick={this.onFormatClicked}>Format</li>
                            <li className={this.state.activeSection === "Rules" ? "active" : ""} onClick={this.onRulesClicked}>Rules</li>
                            <li className={this.state.activeSection === "Contact" ? "active" : ""} onClick={this.onContactClicked}>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="popup-stack" ref={this.divRef}>
                    <div className="close-container" onClick={this.props.closeFunc}>
                        <svg className="close-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 252"><path d="M126 0C56.523 0 0 56.523 0 126s56.523 126 126 126 126-56.523 126-126S195.477 0 126 0zm0 234c-59.551 0-108-48.449-108-108S66.449 18 126 18s108 48.449 108 108-48.449 108-108 108z"/><path d="M164.612 87.388a9 9 0 00-12.728 0L126 113.272l-25.885-25.885a9 9 0 00-12.728 0 9 9 0 000 12.728L113.272 126l-25.885 25.885a9 9 0 006.364 15.364 8.975 8.975 0 006.364-2.636L126 138.728l25.885 25.885c1.757 1.757 4.061 2.636 6.364 2.636s4.606-.879 6.364-2.636a9 9 0 000-12.728L138.728 126l25.885-25.885a9 9 0 00-.001-12.727z"/></svg>
                    </div>
                    {
                        {
                            "About"  : <this.AboutSection />,
                            "Format" : <this.FormatSection />,
                            "Rules"  : <this.RulesSection />,
                            "Contact": <this.ContactSection />
                        }[this.state.activeSection]
                    }
                </div>
            </div>
        )
    }
}