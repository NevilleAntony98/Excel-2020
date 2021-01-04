import { NavLink } from 'react-router-dom';

import './Bottombar.scss';

import schedule from '../../assets/svg/schedule.svg';
import competitions from '../../assets/svg/competitions.svg';
import contacts from '../../assets/svg/contacts.svg';
import events from '../../assets/svg/events.svg';
// import competitions from '../../assets/svg/icons8-trophy-64.png';
// import events from '../../assets/svg/icons8-presentation-64.png';
// import schedule from '../../assets/svg/calendar--v4.png';
// import contacts from '../../assets/svg/icons8-phone-64.png';
import excelLogo from '../../assets/png/excel2020.png';

const Bottombar = () => {
  return (
    <div className="bottombarContainer">
      <NavLink to="/competitions">
        <div className="bottomBarLink">
          <img alt="Competitions" src={competitions} height="20px" width="20px" />
        </div>
      </NavLink>
      <NavLink to="/events">
        <div className="bottomBarLink">
          <img alt="Events" src={events} height="20px" width="20px" />
        </div>
      </NavLink>
      <NavLink to="/" className="bottombarHomeContainer">
        {/* <div className="bottomBarLink"> */}
          <img alt="Home" src={excelLogo} className="bottombarHomeIcon" />
        {/* </div> */}
      </NavLink>
      <NavLink to="/schedule">
        <div className="bottomBarLink">
          <img alt="Schedule" src={schedule} height="20px" width="20px" />
        </div>
      </NavLink>
      <NavLink to="/contacts">
        <div className="bottomBarLink">
          <img alt="Contacts" src={contacts} height="20px" width="20px" />
        </div>
      </NavLink>
    </div>
  );
};

export default Bottombar;
