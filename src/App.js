import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import RegistrationPage from './pages/RegisterPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import LandingPage from './pages/LandingPage';
import RegisterMetrics from './pages/RegisterMetrics/RegisterMetrics';

import Navigation from './components/Navigation';
import SideMenu from './components/AuthedContent';

import './global.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('user is: ', user);
  }, [user]);

  return (
    <div className="App" style={{ height: '100vh' }}>
      {user ? <SideMenu /> : <Navigation />}
      <Switch>
        <div
          className="wrapper"
          style={{
            display: 'flex',
            // width: '100%',
            justifyContent: 'center',
            // height: '100vh',
            minHeight: '80%',
            alignItems: 'center',
          }}>
          {!user
            ? [
                <Route exact path="/" component={LandingPage} />,
                <Route exact path="/login" component={() => <LoginPage setUser={setUser} />} />,
                <Route exact path="/register" component={RegistrationPage} />,

                <Route path="/register-metrics" component={RegisterMetrics} />,
                // <Route component={NotFoundPage} />,
              ]
            : [
                // <Route exact path="/session" component={PreSesstionPage} />,
                // <Route exact path="/progress" component={ProgressPage} />,
                // <Route exact path="/my-training-plan" component={MyTrainingPlan} />,
                // <Route exact path="/training-history" component={HistoryPage} />,
                // <Route exact path="/settings" component={SettingsPage} />,
                // <Route component={NotFoundPage} />,
              ]}
        </div>
      </Switch>
    </div>
  );
}

export default App;
