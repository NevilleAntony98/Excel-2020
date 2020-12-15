import { NavLink } from 'react-router-dom';

import './SmallSidebar.css';

// import hamburgerMenu from '../../assets/svg/hamburgerMenu.svg';
import home from '../../assets/svg/home1.svg';
import schedule from '../../assets/svg/schedule.svg';
import competitions from '../../assets/svg/competitions.svg';
import contacts from '../../assets/svg/contacts.svg';
import events from '../../assets/svg/events.svg';

const SmallSidebar = ({ setIsSidebarOpen }) => {
  return (
    <div className="smallSidebarContainer">
      {/* <img
        alt="expand menu"
        src={hamburgerMenu}
        onClick={() => setIsSidebarOpen(true)}
        className="smallSidebarIcon"
      /> */}
      <div className="smallSidebarInnerContainer">
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <div className="smallSidebarLink">
            <img alt="home" src={home} className="smallSidebarIcon" />
            <div className="linkText">Home</div>
          </div>
        </NavLink>

        <NavLink to="/competitions" style={{ textDecoration: 'none' }}>
          <div className="smallSidebarLink"><img alt="competitions" src={competitions} className="smallSidebarIcon" />
            <div className="linkText">Competitions</div>
          </div>
        </NavLink>
        
        <NavLink to="/events" style={{ textDecoration: 'none' }}>
          <div className="smallSidebarLink">
          <img alt="events" src={events} className="smallSidebarIcon" />
          <div className="linkText">Events</div>
        </div>
        </NavLink>
        <NavLink to="/schedule" style={{ textDecoration: 'none' }}>
          <div className="smallSidebarLink">
          <img alt="schedule" src={schedule} className="smallSidebarIcon" />
          <div className="linkText">Schedule</div>
        </div>
        </NavLink>
        <NavLink to="/contacts" style={{ textDecoration: 'none' }}>
          <div className="smallSidebarLink">
          <img alt="contacts" src={contacts} className="smallSidebarIcon" />
          <div className="linkText">Contacts</div>
        </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SmallSidebar;
