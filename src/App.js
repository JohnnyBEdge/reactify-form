import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import './App.css';
import AcctCreation from './components/AcctCreation'
import ForgotInfo from './components/ForgotInfo'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>

        <Route path="/" exact>
            <Home />
        </Route>

          <Route path="/AcctCreation">
              <AcctCreation />
          </Route> 

          <Route path="/ForgotInfo">
            <ForgotInfo />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
