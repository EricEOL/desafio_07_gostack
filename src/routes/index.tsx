import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact render={() => <Redirect to="/list" />} />
    <Route path="/list" component={Dashboard} />
    <Route path="/import" component={Import} />
  </Switch>
);

export default Routes;
