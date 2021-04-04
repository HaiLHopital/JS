import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import { Cart, Home } from '../pages';

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
        <Route exactpath="/monitors"></Route>
        <Route exact path="/keyboards"></Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
