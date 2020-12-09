import {NavLink} from 'react-router-dom';

import './SmallSidebar.css';

import hamburgerMenu from '../../assets/svg/hamburgerMenu.svg';
import home from '../../assets/svg/home1.svg';
import schedule from '../../assets/svg/schedule.svg';
import competitions from '../../assets/svg/competitions.svg';
import contacts from '../../assets/svg/contacts.svg';
import events from '../../assets/svg/events.svg';

const SmallSidebar = ({setIsSidebarOpen}) => {
  return (
    <div className="smallSidebarContainer">
      {/* <img
        alt="expand menu"
        src={hamburgerMenu}
        onClick={() => setIsSidebarOpen(true)}
        className="smallSidebarIcon"
      /> */}
      <div className="smallSidebarInnerContainer">
        <NavLink to="/">
          <img alt="home" src={home} className="smallSidebarIcon" />
        </NavLink>
        <NavLink to="/competitions">
          <img alt="competitions" src={competitions} className="smallSidebarIcon" />
        </NavLink>
        <NavLink to="/events">
          <img alt="events" src={events} className="smallSidebarIcon" />
        </NavLink>
        <NavLink to="/schedule">
          <img alt="schedule" src={schedule} className="smallSidebarIcon" />
        </NavLink>
        <NavLink to="/contacts">
          <img alt="contacts" src={contacts} className="smallSidebarIcon" />
        </NavLink>
      </div>
    </div>
  );
};

export default SmallSidebar;
