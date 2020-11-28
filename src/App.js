import {Switch, Route, Redirect} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Events from './pages/Events';
import Competitions from './pages/competitions';
import Schedule from './pages/Schedule';
import Contacts from './pages/Contacts';

import './App.scss';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/competitions" component={Competitions} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/contacts" component={Contacts} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
