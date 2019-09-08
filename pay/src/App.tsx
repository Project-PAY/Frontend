import * as React from 'react';
import {IRouteObj} from './@types/routes';
import {Route, Switch} from 'react-router-dom';
import Page404 from '../pages/common/Page404';

interface Props {
  routes: IRouteObj[];
}

const App: React.FC<Props> = React.memo(({routes}) => {
  const routeList = React.useMemo(() => (
    routes.map(({component: Comp, ...route}) => (
      <Route
        key={route.path}
        {...route}
        component={Comp}
      />
    ))
  ), [routes]);

  React.useEffect(() => {
    // @TODO: TokenRefresh in useEffect
  }, []);

  return (
    routeList ? (
      <Switch>
        {routeList}
        <Page404/>
      </Switch>
    ) : null
  );
});

export default App;
