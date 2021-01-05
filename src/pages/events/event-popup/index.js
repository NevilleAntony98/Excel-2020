import { createRef } from 'react'
// import { useState} from 'react'

import './index.scss';
// import phone from '../../../assets/png/icons8-phone-24(2).png';
import contact from '../../../assets/png/user.png';
const EventPopup = ({ event, closeFunc }) => {
    // const [activeSection] = useState("About")
    // const [hasRegistered, setHasRegistered] = useState(null)
    let divRef = createRef();


    // const getSanitizedString = (string) => {
    //     return string.replaceAll('\\\\n', '\n')
    // }

    const AboutSection = () => {
        return (
            <div>
                <div className="about-section section event-about-section">
                    {event.about}
                </div>
                <div className="contact-section section event-contacts">
                    {event.eventHead1 !== null &&
                        <div>
                            <span className="name"><img  src={contact} alt="phone" />{event.eventHead1.name}</span>
                            {/* <a className="email" href={"mailto:" + event.eventHead1.email}>{event.eventHead1.email}</a> */}
                            <span className="role"> Event Head</span>
                            <span className="phone">{event.eventHead1.phoneNumber}</span>
                        </div>}
                    {event.eventHead2 !== null &&
                        <div>
                            <span className="name"><img  src={contact} alt="phone" />{event.eventHead2.name}</span>
                            {/* <a className="email" href={"mailto:" + event.eventHead2.email}>{event.eventHead2.email}</a> */}
                            <span className="role"> Event Head</span>
                            <span className="phone">{event.eventHead2.phoneNumber}</span>
                        </div>}
                </div>
            </div>
        )
    }

    // const ContactSection = () => {
    //     return(
    //         <div className="contact-section section">
    //             {event.eventHead1 !== null &&
    //             <div>
    //                 <span className="name">{event.eventHead1.name}</span>
    //                 <a className="email" href={"mailto:" + event.eventHead1.email}>{event.eventHead1.email}</a>
    //                 <span className="phone">{event.eventHead1.phoneNumber}</span>
    //             </div>}
    //             {event.eventHead2 !== null &&
    //             <div>
    //                 <span className="name">{event.eventHead2.name}</span>
    //                 <a className="email" href={"mailto:" + event.eventHead2.email}>{event.eventHead2.email}</a>
    //                 <span className="phone">{event.eventHead2.phoneNumber}</span>
    //             </div>}
    //         </div>
    //     )
    // }

    return (
        <div className="popup-bg">
        <div className="events popup-content-container">
            <div className="popup-sidebar">
                <div className="close-container-mobile" onClick={closeFunc}>
                    <svg className="close-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 252"><path d="M164.612 87.388a9 9 0 00-12.728 0L126 113.272l-25.885-25.885a9 9 0 00-12.728 0 9 9 0 000 12.728L113.272 126l-25.885 25.885a9 9 0 006.364 15.364 8.975 8.975 0 006.364-2.636L126 138.728l25.885 25.885c1.757 1.757 4.061 2.636 6.364 2.636s4.606-.879 6.364-2.636a9 9 0 000-12.728L138.728 126l25.885-25.885a9 9 0 00-.001-12.727z" /></svg>
                </div>
                <div className="header-container">
                    <div className="image-title-box">
                        <div className="event-popup-img-bg">
                            <img className="event-image" src={event.icon} alt={event.name} />
                        </div>
                        <span className="name">{event.name}</span>
                    </div>
                    {event.button !== null &&
                    <a href={event.registrationLink} className="event-anchor-tag" target="_blank" rel="noreferrer">
                        <button className="event-register-button">{event.button}</button>
                    </a>}
                </div>
            </div>
            <div className="popup-stack" ref={divRef}>
                <div className="close-container" onClick={closeFunc}>
                    <svg className="close-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 252"><path d="M126 0C56.523 0 0 56.523 0 126s56.523 126 126 126 126-56.523 126-126S195.477 0 126 0zm0 234c-59.551 0-108-48.449-108-108S66.449 18 126 18s108 48.449 108 108-48.449 108-108 108z" /><path d="M164.612 87.388a9 9 0 00-12.728 0L126 113.272l-25.885-25.885a9 9 0 00-12.728 0 9 9 0 000 12.728L113.272 126l-25.885 25.885a9 9 0 006.364 15.364 8.975 8.975 0 006.364-2.636L126 138.728l25.885 25.885c1.757 1.757 4.061 2.636 6.364 2.636s4.606-.879 6.364-2.636a9 9 0 000-12.728L138.728 126l25.885-25.885a9 9 0 00-.001-12.727z" /></svg>
                </div>
                <AboutSection />
            </div>
        </div>
        </div>
    )
}

export default EventPopup;