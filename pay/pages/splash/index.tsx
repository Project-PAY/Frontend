import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {IRootState} from '../../src/reducers';

interface Props extends RouteComponentProps {
}

const Splash: React.FC<Props> = ({history}) => {
  const {session: {access}} = useSelector(({system}: IRootState) => system);

  return (
    <div>Splash</div>
  );
};

export default Splash;
