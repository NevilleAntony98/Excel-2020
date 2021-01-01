import { NavLink } from 'react-router-dom';

import './SmallSidebar.css';


// import home from '../../assets/svg/icons8-home-72.png';
// import competitions from '../../assets/svg/icons8-trophy-64.png';
// import events from '../../assets/svg/icons8-presentation-64.png';
// import schedule from '../../assets/svg/calendar--v4.png';
// import contacts from '../../assets/svg/icons8-phone-64.png';
import home from '../../assets/svg/home.svg';
import competitions from '../../assets/svg/competitions.svg';
import events from '../../assets/svg/events.svg';
import schedule from '../../assets/svg/calendar.svg';
import contacts from '../../assets/svg/contacts.svg';
// import logoutpic from '../../assets/svg/icons8-export-50.png';


import NavProfileIcon from './../NavProfileIcon'



const SmallSidebar = ({ setIsSidebarOpen }) => {

  return (
    <div className="smallSidebarContainer">
      <div className="smallSidebarInnerContainer">


        <NavProfileIcon isMobile={false}/>

        <NavLink to="/" style={{ textDecoration: 'none' }} >
          <div className="smallSidebarLink">
            <img alt="home" src={home} className="smallSidebarIcon" />
            <span className="toolTip"><div className="blur-background"></div><p className="toolTipText">Home</p></span>
          </div>
        </NavLink>

        <NavLink to="/competitions" style={{ textDecoration: 'none' }} activeClassName="smallSidebarActive" >
          <div className="smallSidebarLink">
          <img alt="competitions" src={competitions} className="smallSidebarIcon" />
          <span className="toolTip"><p className="toolTipText">Competitions</p></span>
          </div>
        </NavLink>

        <NavLink to="/events" style={{ textDecoration: 'none' }} activeClassName="smallSidebarActive" >
          <div className="smallSidebarLink">
          <img alt="events" src={events} className="smallSidebarIcon" />
          <span className="toolTip"><p className="toolTipText">Events</p></span>
        </div>
        </NavLink>
        <NavLink to="/schedule" style={{ textDecoration: 'none' }} activeClassName="smallSidebarActive" >
          <div className="smallSidebarLink">
          <img alt="schedule" src={schedule} className="smallSidebarIcon" />
          <span className="toolTip"><p className="toolTipText">Schedule</p></span>
        </div>
        </NavLink>
        <NavLink to="/contacts" style={{ textDecoration: 'none' }} activeClassName="smallSidebarActive" >
          <div className="smallSidebarLink">
          <img alt="contacts" src={contacts} className="smallSidebarIcon" />
          <span className="toolTip"><p className="toolTipText">Contacts</p></span>
        </div>
        </NavLink>
      </div>
      {/* <div className="logout">
          <img src={logoutpic} className="logoutIcon" alt="default"></img>
        </div> */}
    </div>
  );
};

export default SmallSidebar;
