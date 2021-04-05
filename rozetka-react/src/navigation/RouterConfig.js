import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import { Cart, Home, Keyboards, Monitors } from '../pages';

function RouterConfig() {
  return (
    <Router>
      <Switch>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/monitors">
          <Monitors />
        </Route>
        <Route exact path="/keyboards">
          <Keyboards />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
