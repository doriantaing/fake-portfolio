import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// App Pages
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/project/:id">
          <Project />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
