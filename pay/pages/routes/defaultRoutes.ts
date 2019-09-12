import {IRouteObj} from '../../src/@types/routes';

const defaultRoutes: IRouteObj[] = [
  {
    path: '/',
    exact: true,
    component: () => import(/* webpackPrefetch: true */ '../splash')
  },
  {
    path: '/welcome',
    exact: true,
    component: () => import(/* webpackPrefetch: true */ '../welcome')
  },
  {
    path: '/main',
    exact: true,
    component: () => import(/* webpackPrefetch: true */ '../')
  },
  {
    path: '/setting',
    exact: true,
    component: () => import(/* webpackPrefetch: true */ '../setting')
  }
];

export default defaultRoutes;
