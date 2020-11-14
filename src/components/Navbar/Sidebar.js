import React, { useEffect, useRef } from "react";

import home from "../../assets/svg/home.svg";
import schedule from "../../assets/svg/schedule.svg";
import competitions from "../../assets/svg/competitions.svg";
import contacts from "../../assets/svg/contacts.svg";
import events from "../../assets/svg/events.svg";
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";
import twitter from "../../assets/svg/twitter.svg";

import "./Sidebar.css";

const Sidebar = ({ setIsSidebarOpen }) => {
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsSidebarOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="sidebar-container" ref={wrapperRef}>
      <div className="sidebar-pic">Pic</div>
      <div className="sidebar-row" onClick={() => setIsSidebarOpen(false)}>
        <img alt="home" src={home} className="sidebarIcon" />
        Home
      </div>
      <div className="sidebar-row" onClick={() => setIsSidebarOpen(false)}>
        <img alt="schedule" src={schedule} className="sidebarIcon" />
        Schedule
      </div>
      <div className="sidebar-row" onClick={() => setIsSidebarOpen(false)}>
        <img alt="competitions" src={competitions} className="sidebarIcon" />
        Competitions
      </div>
      <div className="sidebar-row" onClick={() => setIsSidebarOpen(false)}>
        <img alt="events" src={events} className="sidebarIcon" />
        Events
      </div>
      <div className="sidebar-row" onClick={() => setIsSidebarOpen(false)}>
        <img alt="contacts" src={contacts} className="sidebarIcon" />
        Contacts
      </div>
      <div className="sidebar-rowSocial">
        <img alt="facebook" src={facebook} className="sidebarSocialIcon" />
        <img alt="instagram" src={instagram} className="sidebarSocialIcon" />
        <img alt="twitter" src={twitter} className="sidebarSocialIcon" />
      </div>
    </div>
  );
};

export default Sidebar;
