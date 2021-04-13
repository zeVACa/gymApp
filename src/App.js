import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import RegistrationPage from './pages/RegisterPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import LandingPage from './pages/LandingPage';

import PreSesstionPage from './pages/Session/PreSesstionPage';
import ProgressPage from './pages/ProgressPage';
import MyTrainingPlan from './pages/MyTrainingPlan';
import HistoryPage from './pages/HistoryPage';
import SettingsPage from './pages/SettingsPage';

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

          {!user
            ? [
                <Route
                  path="/login"
                  component={() => <LoginPage user={user} setUser={setUser} />}
                />,
                <Route path="/register" component={RegistrationPage} />,
              ]
            : [
                <Route path="/session" component={PreSesstionPage} />,
                <Route path="/progress" component={ProgressPage} />,
                <Route path="/my-training-plan" component={MyTrainingPlan} />,
                <Route path="/training-history" component={HistoryPage} />,
                <Route path="/settings" component={SettingsPage} />,
              ]}
        </div>
      </Switch>
    </div>
  );
}

export default App;
