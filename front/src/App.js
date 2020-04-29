import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { theme } from "./styles/theme";
import ProjectProvider from "./contexts/project.provider";

// App Pages
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import { ThemeProvider } from "styled-components";


const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ProjectProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/project/:id">
              <Project />
            </Route>
          </Switch>
        </ProjectProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
