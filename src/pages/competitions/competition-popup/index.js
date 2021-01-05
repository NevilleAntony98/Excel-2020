import { createRef } from 'react'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

import RegHelper from '../../../utils/registrationHelper';

import RegisterButton from './register-button'
import RegisterSection from './register-section'
import ManageTeamSection from './manage-section'

// import reward_icon from './reward.svg'
// import clock_icon from './clock.svg'
// import team_icon from './team.svg'
// import phone from '../../../assets/png/phone-receiver.png';
import contact from '../../../assets/png/user.png';
import './index.scss'

const CompetitionPopup = ({ competition, closeFunc }) => {
    const [activeSection, setActiveSection] = useState("About")
    const [hasRegistered, setHasRegistered] = useState(null)
    let divRef = createRef();

    useEffect(() => {
        // To reset scroll when stack content is changed
        divRef.current.scrollTop = 0;

        RegHelper.asyncHasRegisteredForEvent(competition.id).then(res => {
            setHasRegistered(res)
        })
    });

    // const getSanitizedString = (string) => {
    //     if(string){
    //     return string.replaceAll('\\\\n', '\n')
    //     }
    // }

    const AboutSection = () => {
        return (
            <div>
                <div className="about-section section">
                    {competition.about}
                </div>
                <div className="about-extra ">
                    <div className="about-extra-content ">
                    {competition.prizeMoney && <div className="prize-money">
                        {/* <img src={reward_icon} alt="reward" /> */}
                        <div className="about-extra-header">
                            Prize Pool
                        </div>
                        <span>{competition.prizeMoney} /-</span>
                    </div>}
                    </div>
                    <div className="about-extra-content" >
                    {competition.datetime && <span className="date">
                        {/* <img src={clock_icon} alt="time"></img> */}
                        <div className="about-extra-header">
                            Date
                        </div>
                        <span>{dayjs(competition.datetime).format('D MMM')}</span>
                    </span>}
                    </div>
                    <div className="about-extra-content" >
                    {competition.datetime && <span className="venue">
                        {/* <img src={clock_icon} alt="time"></img> */}
                        <div className="about-extra-header">
                            Platform
                        </div>
                        {/* <span style={{marginLeft:"5px"}}>{dayjs(competition.datetime).format('mm:ss a')}</span> */}
                        <span>{competition.venue}</span>
                    </span>}
                    </div>
                </div>

            </div>
        )
    }

    const FormatSection = () => {
        return (
            <div className="format-section section">
                {competition.format}
            </div>
        )
    }

    const RulesSection = () => {
        return (
            <div className="rules-section section">
                {competition.rules}
            </div>
        )
    }

    const ContactSection = () => {
        return (
            <div className="contact-section section">
                {competition.eventHead1 !== null &&
                    <div>
                        <span className="name"><img  src={contact} alt="contact" />{competition.eventHead1.name}</span>
                        {/* <a className="email" href={"mailto:" + competition.eventHead1.email}>{competition.eventHead1.email}</a> */}
                        <span className="role"> Event Head</span>
                        <a href={"tel:"+competition.eventHead1.phoneNumber}><span className="phone">{competition.eventHead1.phoneNumber}</span></a>
                    </div>}
                {competition.eventHead2 !== null &&
                    <div>
                        <span className="name"><img  src={contact} alt="phone" />{competition.eventHead2.name}</span>
                        {/* <a className="email" href={"mailto:" + competition.eventHead2.email}>{competition.eventHead2.email}</a> */}
                        <span className="role"> Event Head</span>
                        <a href={"tel:"+competition.eventHead2.phoneNumber}><span className="phone">{competition.eventHead2.phoneNumber}</span></a>
                    </div>}
            </div>
        )
    }

    return (
        <div className="popup-bg">
        <div className="popup-content-container">
            <div className="popup-sidebar">
                <div className="close-container-mobile" onClick={closeFunc}>
                    <svg className="close-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 252"><path d="M164.612 87.388a9 9 0 00-12.728 0L126 113.272l-25.885-25.885a9 9 0 00-12.728 0 9 9 0 000 12.728L113.272 126l-25.885 25.885a9 9 0 006.364 15.364 8.975 8.975 0 006.364-2.636L126 138.728l25.885 25.885c1.757 1.757 4.061 2.636 6.364 2.636s4.606-.879 6.364-2.636a9 9 0 000-12.728L138.728 126l25.885-25.885a9 9 0 00-.001-12.727z" /></svg>
                </div>
                <div className="header-container">
                    <div className="image-title-box">
                        <img className="competition-image" src={competition.icon} alt={competition.name} />
                        <span className="name">{competition.name}</span>
                    </div>
                    <div className="reg-prize-box">
                        <RegisterButton
                            competition={competition}
                            hasRegistered={hasRegistered}
                            setHasRegistered={setHasRegistered}
                            setActiveSection={setActiveSection} />
                    </div>
                    {competition.button !== null &&
                    <a href={competition.registrationLink} className="event-anchor-tag" target="_blank" rel="noreferrer">
                        <button className="event-register-button">{competition.button}</button>
                    </a>}
                    {competition.needRegistration && competition.registrationOpen && !competition.isTeam && <div className="alt-register">
                        <span> !! Once registered, the process cannot be undone. </span>
                    </div>}
                </div>
                <div className="popup-stack-switcher">
                    <ul className="popup-nav">
                        <li className={activeSection === "About" ? "active" : ""} onClick={() => setActiveSection("About")}>About</li>
                        <li className={activeSection === "Format" ? "active" : ""} onClick={() => setActiveSection("Format")}>Format</li>
                        <li className={activeSection === "Rules" ? "active" : ""} onClick={() => setActiveSection("Rules")}>Rules</li>
                        <li className={activeSection === "Contact" ? "active" : ""} onClick={() => setActiveSection("Contact")}>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="popup-stack" ref={divRef}>
                <div className="close-container" onClick={closeFunc}>
                    <svg className="close-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 252"><path d="M126 0C56.523 0 0 56.523 0 126s56.523 126 126 126 126-56.523 126-126S195.477 0 126 0zm0 234c-59.551 0-108-48.449-108-108S66.449 18 126 18s108 48.449 108 108-48.449 108-108 108z" /><path d="M164.612 87.388a9 9 0 00-12.728 0L126 113.272l-25.885-25.885a9 9 0 00-12.728 0 9 9 0 000 12.728L113.272 126l-25.885 25.885a9 9 0 006.364 15.364 8.975 8.975 0 006.364-2.636L126 138.728l25.885 25.885c1.757 1.757 4.061 2.636 6.364 2.636s4.606-.879 6.364-2.636a9 9 0 000-12.728L138.728 126l25.885-25.885a9 9 0 00-.001-12.727z" /></svg>
                </div>
                {
                    {
                        "About": <AboutSection />,
                        "Format": <FormatSection />,
                        "Rules": <RulesSection />,
                        "Contact": <ContactSection />,
                        "Register": <RegisterSection
                            competition={competition}
                            setHasRegistered={setHasRegistered}
                            setActiveSection={setActiveSection} />,
                        "Manage": <ManageTeamSection competition={competition} />
                    }[activeSection]
                }
            </div>
        </div>
        </div>
    )
}

export default CompetitionPopup