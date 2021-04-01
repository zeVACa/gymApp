import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage/LoginPage';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
      </Switch>
    </div>
  );
}

export default App;
