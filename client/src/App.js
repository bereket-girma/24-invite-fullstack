import React from "react";

import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Invite } from "./features/Invite/Invite";
import { Going } from "./features/Going/Going";
import { NotGoing } from "./features/notGoing/notGoing";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Invite />
        </Route>
        <Route path="/going">
          <Going />
        </Route>
        <Route path="/notGoing">
          <NotGoing />
        </Route>
      </Router>
    </div>
  );
}

export default App;
