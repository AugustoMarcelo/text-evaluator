import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Evaluate from './pages/Evaluate';
import Dashboard from './pages/Dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Evaluate} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}