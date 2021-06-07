import { Auth, Home, User } from '../pages';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, USER_ROUTE, MAIN_ROUTE } from './consts';
import NoMatch from './NoMatch';

export const routes = [
  { path: LOGIN_ROUTE, Component: Auth },
  { path: REGISTRATION_ROUTE, Component: Auth },
  { path: USER_ROUTE+"/:id", Component: User },
  { path: MAIN_ROUTE, Component: Home },
  { path: '*', Component: NoMatch }
];
