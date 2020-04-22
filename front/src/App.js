import React, { useState, useEffect } from 'react';

// App components
import Main from './components/layouts/main';
import Login from './components/layouts/login';
import LoginHeader from './components/layouts/login-header';
import LoginBody from './components/layouts/login-body';
import LoginFooter from './components/layouts/login-footer';
import Title from '../../fake-portfolio/client/src/components/atoms/title';
import InputGroup from '../../fake-portfolio/client/src/components/atoms/input-group';
import Label from '../../fake-portfolio/client/src/components/atoms/label';
import Input from '../../fake-portfolio/client/src/components/atoms/input';
import Button from '../../fake-portfolio/client/src/components/atoms/button';
import Content from './components/layouts/content';

const App = () => {

  // State to deal with querying
  const [queryState, setQueryState] = useState(
    {
      fetching: false,
      readyToFetch: false,
      logged: false,
    }
  );

  // State of username form field
  const [usernameState, setUsernameState] = useState(null);

  // State of password form field
  const [passwordState, setPasswordState] = useState(null);

  // Effect to check if we can activate button
  useEffect(() => {
    if(usernameState && passwordState) setQueryState({fetching: false, readyToFetch: true})
  }, [usernameState, passwordState])

  // Simulate API call
  const fetchMock = (username, password) => {
    setQueryState({fetching: true, readyToFetch: false});
    const timeout = setTimeout(() => {
      setQueryState({fetching: false, readyToFetch: false, logged: true});
      clearTimeout(timeout);
    }, 4000);
  }

  return (
    <Main>
      {!queryState.logged &&
      <Login>
        <LoginHeader>
          <Title>Please, log in !</Title>
        </LoginHeader>
        <LoginBody>
          <InputGroup>
            <Label>Username</Label>
            <Input
              placeholder='Type your username'
              disabled={queryState.fetching}
              onChange={e => setUsernameState(e.target.value)}
              data-testid='username-field'
            />
          </InputGroup>
          <InputGroup>
            <Label>Password</Label>
            <Input
              placeholder='Type your password'
              type='password'
              disabled={queryState.fetching}
              onChange={e => setPasswordState(e.target.value)}
              data-testid='password-field'
            />
          </InputGroup>
        </LoginBody>
        <LoginFooter>
          <Button
            disabled={!queryState.readyToFetch}
            onClick={e => fetchMock()}
            data-testid='login-button'
          >
            Login
          </Button>
        </LoginFooter>
      </Login>
      }
      {queryState.logged &&
      <Content>
        Hey you are now logged in !
      </Content>
      }
    </Main>
  );
}

export default App;
