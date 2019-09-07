import lazy from './lazy';
import {IRouteObj} from '../../src/@types/routes';

const makeRoutes = (routes: IRouteObj[]) => routes.map((route => ({
  ...route,
  component: typeof route.component === 'function'
    ? lazy(route.component)
    : route.component
})));

export default makeRoutes;
