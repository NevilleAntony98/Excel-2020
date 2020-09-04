import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
  render() {
      return(
          <div>
              MAIN
              {/* <Nav /> */}
              <Switch>
                  {/* <Route path="/home" component={Home} />
                  <Route path="/competitions" component={Competitions} />
                  <Route path="/events" component={Events} />
                  <Route path="/schedule" component={Schedule} />
                  <Route path="/contacts" component={ContactsPage} />
                  <Route exact path="/" component={Home} /> */}
              </Switch>
          </div>
      )
  }
}   
