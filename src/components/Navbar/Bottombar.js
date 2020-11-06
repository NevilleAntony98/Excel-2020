import React from "react";

import "./Bottombar.css";

import schedule from "../../assets/svg/schedule.svg";
import competitions from "../../assets/svg/competitions.svg";
import contacts from "../../assets/svg/contacts.svg";
import events from "../../assets/svg/events.svg";
import excelLogo from "../../assets/svg/excelLogo.svg";

const Bottombar = () => {
  return (
    <div className="bottombar-container">
      <div>
        <img alt="Schedule" src={schedule} height="20px" width="20px" />
      </div>
      <div>
        <img alt="Competitions" src={competitions} height="20px" width="20px" />
      </div>
      <div>
        <img
          alt="Home"
          src={excelLogo}
          height="60px"
          width="60px"
          style={{ marginTop: "-24px" }}
        />
      </div>
      <div>
        <img alt="Events" src={events} height="20px" width="20px" />
      </div>
      <div>
        <img alt="Contacts" src={contacts} height="20px" width="20px" />
      </div>
    </div>
  );
};

export default Bottombar;
