import Router, { HistoryLocation } from 'react-router';
import routes from './routes';

let router = Router.create({
  routes: routes,
  location: HistoryLocation
});

export default router;
