import LoginPage from './components/LoginPage';

import { Route, Switch } from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage';

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
