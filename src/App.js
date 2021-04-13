import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import RegistrationPage from './pages/RegisterPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import LandingPage from './pages/LandingPage';

import Navigation from './components/Navigation';
import SideMenu from './components/SideMenu';

import './global.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('user is: ', user);
  }, [user]);

  return (
    <div className="App" style={{ height: '100vh' }}>
      {user ? <SideMenu /> : <Navigation />}
      {/* <SideMenu /> */}
      <Switch>
        <div
          className="wrapper"
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            // height: '100vh',
            minHeight: '80%',
            alignItems: 'center',
          }}>
          <Route exact path="/" component={LandingPage} />

          {!user ? (
            [
              <Route path="/login" component={() => <LoginPage user={user} setUser={setUser} />} />,
              <Route path="/register" component={RegistrationPage} />,
            ]
          ) : (
            <h1>User is authed</h1>
          )}
        </div>
      </Switch>
    </div>
  );
}

export default App;
