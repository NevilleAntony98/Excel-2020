import React from "react";
// import {Switch, Route} from 'react-router-dom';

import Navbar from "./components/Navbar";

import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div>MAIN123456789nysabcdefghijklmnop</div>
      {/* <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/competitions" component={Competitions} />
                  <Route path="/events" component={Events} />
                  <Route path="/schedule" component={Schedule} />
                  <Route path="/contacts" component={ContactsPage} />
                  <Route exact path="/" component={Home} />
              </Switch> */}
    </div>
  );
};

export default App;
