import React from 'utils/react';
import { BrowserRouter as Router, Route, Switch } from 'utils/react-router-dom';
import Login from './Login';

const AuthApp = () => (
  <Router>
    <Switch>
      <Route path="/auth/login" component={Login} />
    </Switch>
  </Router>
);

export default AuthApp;