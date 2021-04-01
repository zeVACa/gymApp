import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage/LoginPage';

import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
      </Switch>
    </div>
  );
}

export default App;
