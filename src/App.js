import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage/LoginPage';

import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <SideMenu />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
      </Switch>
    </div>
  );
}

export default App;
