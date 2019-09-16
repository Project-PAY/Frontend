import * as React from 'react';
import {IRouteObj} from './@types/routes';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
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
    console.log('---------- COMPONENT DID MOUNT ----------');
  }, []);

  return (
    routeList ? (
      <Router>
        <Switch>
          {routeList}
          <Route component={Page404}/>
        </Switch>
      </Router>
    ) : null
  );
});

export default App;
