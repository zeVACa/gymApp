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
        <div
          className="wrapper"
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            height: '100vh',
            alignItems: 'center',
          }}>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
