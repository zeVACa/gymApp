import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import RegistrationPage from './pages/RegisterPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import LandingPage from './pages/LandingPage';
import RegisterMetrics from './pages/RegisterMetrics/RegisterMetrics';

import Navigation from './components/Navigation';
import SideMenu from './components/AuthedContent';

import './global.css';

var userId = null;

function App() {
  const [user, setUser] = useState(null);

  console.log('Вернулся сука');

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));

    if (localUser) {
      setUser(localUser);
    }

    console.log('local user: ', localUser);
    console.log('user is: ', user);
  }, []);

  console.log('isMetrics = ', user === null ? 'null' : user['isMetrics']);
  return (
    <div className="App" style={{ height: '100vh' }}>
      {/* {user ? <SideMenu user={user} setUser={setUser} /> : <Navigation />} */}
      {user ? (
        user['isMetrics'] === true ? (
          <SideMenu user={user} setUser={setUser} />
        ) : (
          <RegisterMetrics user={user} setUser={setUser} />
        )
      ) : (
        <Navigation />
      )}
      <Switch>
        <div
          className="wrapper"
          style={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '80%',
            alignItems: 'center',
          }}>
          {!user
            ? [
                <Route exact path="/" component={LandingPage} />,
                <Route exact path="/login" component={() => <LoginPage setUser={setUser} />} />,
                <Route exact path="/register" component={RegistrationPage} />,

                <Route path="/register-metrics" component={RegisterMetrics} />,
              ]
            : []}
        </div>
      </Switch>
    </div>
  );
}

export default App;
