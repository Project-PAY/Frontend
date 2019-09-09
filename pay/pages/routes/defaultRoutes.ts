import {IRouteObj} from '../../src/@types/routes';

const defaultRoutes: IRouteObj[] = [
  {
    path: '/',
    exact: true,
    component: () => import(/* webpackPrefetch: true */ '../')
  },
  {
    path: '/welcome',
    exact: true,
    component: () => import(/* webpackPrefetch: true */ '../welcome')
  }
];

export default defaultRoutes;
