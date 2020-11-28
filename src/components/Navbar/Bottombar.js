import {NavLink} from 'react-router-dom';

import './Bottombar.css';

import schedule from '../../assets/svg/schedule.svg';
import competitions from '../../assets/svg/competitions.svg';
import contacts from '../../assets/svg/contacts.svg';
import events from '../../assets/svg/events.svg';
import excelLogo from '../../assets/png/excelLogo.png';

const Bottombar = () => {
  return (
    <div className="bottombarContainer">
      <NavLink to="/schedule">
        <img alt="Schedule" src={schedule} height="20px" width="20px" />
      </NavLink>
      <NavLink to="/competitions">
        <img alt="Competitions" src={competitions} height="20px" width="20px" />
      </NavLink>
      <NavLink to="/" className="bottombarHomeContainer">
        <img alt="Home" src={excelLogo} className="bottombarHomeIcon"/>
      </NavLink>
      <NavLink to="/events">
        <img alt="Events" src={events} height="20px" width="20px" />
      </NavLink>
      <NavLink to="/contacts">
        <img alt="Contacts" src={contacts} height="20px" width="20px" />
      </NavLink>
    </div>
  );
};

export default Bottombar;
