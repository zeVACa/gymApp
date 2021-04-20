import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import RegistrationPage from './pages/RegisterPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import LandingPage from './pages/LandingPage';
import SesstionResults from './pages/Session/SesstionResults';
import RegisterMetrics from './pages/RegisterMetrics/RegisterMetrics';

import PreSesstionPage from './pages/Session/PreSesstionPage';
import ProgressPage from './pages/ProgressPage';
import MyTrainingPlan from './pages/MyTrainingPlan';
import HistoryPage from './pages/HistoryPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

import Navigation from './components/Navigation';
import SideMenu from './components/AuthedContent';

import './global.css';

var userId = null;

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
                <Route exact path="/SesstionResults" component={SesstionResults} />,
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
