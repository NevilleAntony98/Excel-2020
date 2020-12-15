import {Switch, Route, Redirect} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/home';
import Events from './pages/events';
import Competitions from './pages/competitions';
import Schedule from './pages/schedule';
import Contacts from './pages/contacts';

import './App.scss';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="nav-shift">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/competitions" component={Competitions} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/contacts" component={Contacts} />
        <Redirect to="/" />
      </Switch>
      </div>
    </div>
  );
};

export default App;
