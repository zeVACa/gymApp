import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import RegistrationPage from './pages/RegisterPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import LandingPage from './pages/LandingPage';
import RegisterMetrics from './pages/RegisterMetrics/RegisterMetrics';

import Navigation from './components/Navigation';
import SideMenu from './components/AuthedContent';

import './global.css';

import RecoverPasswordPage from './pages/RecoverPassword/RecoverPasswordPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (localUser) {
      if (localUser['name']) localUser['isMetrics'] = true;
      setUser(localUser);
    }
  }, []);

  // console.log('isMetrics = ', user === null ? 'null' : user['isMetrics']);
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
        <div className="wrapper">
          {!user
            ? [
                <Route exact path="/" component={LandingPage} />,
                <Route exact path="/login" component={() => <LoginPage setUser={setUser} />} />,
                <Route exact path="/register" component={RegistrationPage} />,

                <Route path="/register-metrics" component={RegisterMetrics} />,

                <Route path="/recover" component={RecoverPasswordPage} />,
              ]
            : []}
        </div>
      </Switch>
    </div>
  );
}

export default App;
