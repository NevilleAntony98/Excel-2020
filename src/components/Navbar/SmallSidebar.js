import { NavLink } from 'react-router-dom';

import './SmallSidebar.css';

// import hamburgerMenu from '../../assets/svg/hamburgerMenu.svg';
import profilepic from '../../assets/png/profilepic.png'
import home from '../../assets/svg/icons8-home-72.png';
import competitions from '../../assets/svg/icons8-trophy-64.png';
import events from '../../assets/svg/icons8-presentation-64.png';
import schedule from '../../assets/svg/calendar--v4.png';
import contacts from '../../assets/svg/icons8-phone-64.png';
import logoutpic from '../../assets/svg/icons8-export-50.png';


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
        {/* <div className="navColors">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div> */}

        <div className="navbarProfile">
          <img src={profilepic} className="navbarProfileIcon" alt="default"></img>
        </div>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <div className="smallSidebarLink">
            <img alt="home" src={home} className="smallSidebarIcon" />
            {/* <div className="linkText">Home</div> */}
          </div>
        </NavLink>

        <NavLink to="/competitions" style={{ textDecoration: 'none' }}>
          <div className="smallSidebarLink"><img alt="competitions" src={competitions} className="smallSidebarIcon" />
            {/* <div className="linkText">Competitions</div> */}
          </div>
        </NavLink>
        
        <NavLink to="/events" style={{ textDecoration: 'none' }}>
          <div className="smallSidebarLink">
          <img alt="events" src={events} className="smallSidebarIcon" />
          {/* <div className="linkText">Events</div> */}
        </div>
        </NavLink>
        <NavLink to="/schedule" style={{ textDecoration: 'none' }}>
          <div className="smallSidebarLink">
          <img alt="schedule" src={schedule} className="smallSidebarIcon" />
          {/* <div className="linkText">Schedule</div> */}
        </div>
        </NavLink>
        <NavLink to="/contacts" style={{ textDecoration: 'none' }}>
          <div className="smallSidebarLink">
          <img alt="contacts" src={contacts} className="smallSidebarIcon" />
          {/* <div className="linkText">Contacts</div> */}
        </div>
        </NavLink>
      </div>
      <div className="logout">
          <img src={logoutpic} className="logoutIcon" alt="default"></img>
        </div>
    </div>
  );
};

export default SmallSidebar;
