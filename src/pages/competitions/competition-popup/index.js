import { createRef, Component } from 'react';

import './index.scss';

export default class CompetitionPopup extends Component {
    state = {
        activeSection: "About"
    }

    constructor(props) {
        super(props);

        this.divRef = createRef();
    }

    componentDidUpdate() {
        // To reset scroll when stack content is changed
        this.divRef.current.scrollTop = 0;
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus diam sem, id porta ipsum facilisis a. Sed luctus sagittis magna, quis molestie augue condimentum eu. Vivamus tempor tristique leo convallis venenatis. Curabitur elit libero, lacinia sit amet risus eget, rhoncus pharetra lectus. Morbi sodales scelerisque quam quis congue. Curabitur scelerisque urna in ullamcorper commodo. Ut ut dui eu neque pharetra consectetur at vel diam. Morbi lacinia accumsan orci, in faucibus risus malesuada eget.
            </div>
        )
    }

    FormatSection = () => {
        return(
            <div className="format-section section">
                <p>Ut nec imperdiet eros, vitae malesuada dolor. Donec luctus mi at dapibus ultricies. Aliquam scelerisque felis vitae pretium scelerisque. Duis bibendum est ante, a pellentesque libero porta molestie. Ut sed aliquam est. Donec at ipsum quis metus eleifend porttitor vitae iaculis eros. Morbi vitae orci vel purus porttitor finibus. Maecenas aliquam urna non commodo varius. Praesent justo ante, cursus venenatis nibh a, accumsan ultrices mauris. Duis venenatis hendrerit sem, vel pulvinar massa ornare vitae. Maecenas ut magna auctor nibh eleifend fermentum nec eu nisl. Fusce ipsum urna, consectetur eget dui quis, cursus sagittis nisi. Sed orci nunc, consequat quis fringilla sed, porttitor a turpis. Maecenas est lectus, volutpat id tempor sit amet, lacinia vitae lorem.</p>

                <p>Aenean non consequat quam. Quisque cursus arcu urna, sit amet vestibulum tortor accumsan in. In hac habitasse platea dictumst. Cras varius iaculis metus et commodo. Aenean laoreet arcu sit amet sem mattis dignissim. Curabitur vitae diam leo. Phasellus est lorem, euismod quis elit aliquam, pharetra fermentum urna. Integer laoreet mauris et mauris consectetur vestibulum. Vivamus nulla nunc, venenatis quis purus non, mollis volutpat risus. Ut a quam ut ante ultricies hendrerit. Integer auctor fermentum interdum. Nam iaculis id nisl ut dapibus. Ut ipsum ligula, condimentum vitae mattis eget, mattis ac est. Suspendisse ante purus, condimentum ac sollicitudin eu, mattis vitae arcu.</p>
            </div>
        )
    }

    RulesSection = () => {
        return(
            <div className="rules-section section">
                Sed odio mauris, euismod vitae nunc et, ultricies scelerisque ex. Curabitur lorem lectus, iaculis sit amet ullamcorper a, scelerisque at ligula. Aliquam in fringilla nibh. Nunc aliquet gravida fermentum.
                <ul>
                    <li>
                        You do not talk about fight club...
                    </li>
                    <li>
                        You DO NOT talk about the fight...until it is over
                    </li>
                    <li>
                        Someone yells stop, goes limp, taps out, the fight is over
                    </li>
                    <li>
                        Only 2 guys to a fight...
                    </li>
                    <li>
                        One fight at a time, fellas
                    </li>
                    <li>
                        No shirt, No shoes, No RATs
                    </li>
                    <li>
                        The fight will go as long as it has to...
                    </li>
                    <li>
                        If this is your first night at fight club, you have to fight
                    </li>
                </ul>
            </div>
        )
    }

    ContactSection = () => {
        return(
            <div className="contact-section section">
                <div>
                    <span className="name">Bill the Butcher</span>
                    <span className="phone">+91 1234567890</span>
                </div>
                <div>
                    <span className="name">Daniel Plainview</span>
                    <span className="phone">+91 1234567890</span>
                </div>
            </div>
        )
    }

    render() {
        return(
            <div className="popup-content-container">
                <div className="popup-sidebar">
                    <img className="competition-image" src={this.props.icon} alt={this.props.name}/>
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