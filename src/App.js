import { useState } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import Iframe from 'react-iframe'

import AuthHelper from './utils/authHelper'

import Navbar from './components/Navbar';
import Home from './pages/home';
import Events from './pages/events';
import Competitions from './pages/competitions';
import Schedule from './pages/schedule';
import Contacts from './pages/contacts';

import './App.scss';
import NavProfileIcon from './components/NavProfileIcon';
import ParticlesBg from 'particles-bg';
const App = () => {
  const setIsLoggedIn = useState(false)[1];

  function receiveMessage(event) {
    if (typeof event.data == 'string' && event.data.length !== 0)
      AuthHelper.asyncSetRefreshToken(event.data)
        .then(res => {
          if (res != null)
            setIsLoggedIn(true)
        })
    else if (event.data == null)
      AuthHelper.clearAllTokens()
  }

  window.addEventListener("message", receiveMessage);

  return (
    <div className="app-container">
      <Navbar />
      <div style={{display: 'none'}}>
        <Iframe src="https://accounts.excelmec.org/auth/authorize" />
      </div>
      <div className="nav-shift">
      <div className="mobile-profile-icon">
        <NavProfileIcon isMobile={true} />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/competitions" component={Competitions} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/contacts" component={Contacts} />
        <Redirect to="/" />
      </Switch>
      </div>
      <ParticlesBg type="circle" num={15} bg={true} /> 
    </div>
  );
};

export default App;
