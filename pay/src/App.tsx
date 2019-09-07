import * as React from 'react';
import Loading from './components/common/Loading';
import {IRouteObj} from './@types/routes';
import {Redirect, Route, Switch} from 'react-router-dom';

const App: React.FC<{routes: IRouteObj[]}> = React.memo(({routes}) => {
  return (
    <div>
      <Loading/>
    </div>
  );
});

export default App;
