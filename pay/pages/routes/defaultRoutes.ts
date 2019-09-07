import {IRouteObj} from '../../src/@types/routes';

const defaultRoutes: IRouteObj[] = [
  {
    path: '/',
    exact: true,
    component: () => import(/* webpackPrefetch: true */ '../')
  }
];

export default defaultRoutes;
