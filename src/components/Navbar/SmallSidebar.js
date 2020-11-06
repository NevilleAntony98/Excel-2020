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
    <div className="smallSidebar-container">
      <img
        alt=""
        src={hamburgerMenu}
        onClick={() => setIsSidebarOpen(true)}
        height="20px"
        width="20px"
      />
      <img alt="home" src={home} height="20px" width="20px" />
      <img alt="schedule" src={schedule} height="20px" width="20px" />
      <img alt="competitions" src={competitions} height="20px" width="20px" />
      <img alt="events" src={events} height="20px" width="20px" />
      <img alt="contacts" src={contacts} height="20px" width="20px" />
    </div>
  );
};

export default SmallSidebar;
