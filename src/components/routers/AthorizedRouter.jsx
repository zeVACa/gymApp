import { Switch, Route } from 'react-router-dom';

import PreSessionPage from '../../pages/SessionPages/PreSessionPage';
import SessionPage from '../../pages/SessionPages/SessionPage';
import SessionResults from '../../pages/SessionPages/SessionResults';

import ProgressPage from '../../pages/ProgressPage';
import MyTrainingPlan from '../../pages/MyTrainingPlan';
import HistoryPage from '../../pages/HistoryPage';
import SettingsPage from '../../pages/SettingsPage';

const AthorizedRouter = ({ user, setUser, setTrainingPlan, trainingPlan }) => {
  return (
    <Switch>
      <Route exact path="/progress" component={ProgressPage} />
      <Route exact path="/my-training-plan" component={MyTrainingPlan} />
      <Route exact path="/training-history" component={() => <HistoryPage user={user} />} />
      <Route exact path="/settings" component={() => <SettingsPage setUser={setUser} />} />

      <Route
        exact
        path="/pre-session"
        component={() => (
          <PreSessionPage
            user={user}
            setTrainingPlan={setTrainingPlan}
            trainingPlan={trainingPlan}
          />
        )}
      />
      <Route exact path="/session" component={() => <SessionPage trainingPlan={trainingPlan} />} />
      <Route exact path="/SessionResults" component={SessionResults} />
    </Switch>
  );
};

export default AthorizedRouter;
