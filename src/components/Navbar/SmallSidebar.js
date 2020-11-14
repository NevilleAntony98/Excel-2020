import React from "react";

import "./SmallSidebar.css";

import hamburgerMenu from "../../assets/svg/hamburgerMenu.svg";
import home from "../../assets/svg/home.svg";
import schedule from "../../assets/svg/schedule.svg";
import competitions from "../../assets/svg/competitions.svg";
import contacts from "../../assets/svg/contacts.svg";
import events from "../../assets/svg/events.svg";

const SmallSidebar = ({ setIsSidebarOpen }) => {
  return (
    <div className="smallSidebarContainer">
      <img
        alt="expand menu"
        src={hamburgerMenu}
        onClick={() => setIsSidebarOpen(true)}
        className="smallSidebarIcon"
      />
      <div className="smallSidebarInnerContainer">
        <img alt="home" src={home} className="smallSidebarIcon" />
        <img alt="schedule" src={schedule} className="smallSidebarIcon" />
        <img
          alt="competitions"
          src={competitions}
          className="smallSidebarIcon"
        />
        <img alt="events" src={events} className="smallSidebarIcon" />
        <img alt="contacts" src={contacts} className="smallSidebarIcon" />
      </div>
    </div>
  );
};

export default SmallSidebar;
