import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

export default function AppRouter() {
  return (
    <Switch>
      {routes.map(({ path, Component }) => 
        <Route exact key={path} path={path} component={Component} />
      )}

    </Switch>
  );
}
