import React, { useState } from "react";
// import {Switch, Route} from 'react-router-dom';

import Navbar from "./components/Navbar";

import "./App.scss";

const App = () => {
  return (
    <div>
      <Navbar />
      MAIN
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
