import React from 'react';

// App components
import Main from './components/layouts/main';
import Login from './components/layouts/login';
import LoginHeader from './components/layouts/login-header';
import LoginBody from './components/layouts/login-body';
import { Title } from "./components/atoms/Title/Title";

const App = () => {
  return (
    <Main>
      <Login>
        <LoginHeader>
          <Title type="h1">Title</Title>
        </LoginHeader>
        <LoginBody>
        </LoginBody>
      </Login>
    </Main>
  );
}

export default App;
