import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import RegistrationPage from './pages/RegisterPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import LandingPage from './pages/LandingPage';

import Navigation from './components/Navigation';
import SideMenu from './components/SideMenu';

import './global.css';

function App() {
  const [user, setUser] = useState(null);

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
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
