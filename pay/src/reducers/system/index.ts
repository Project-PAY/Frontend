import sessionReducer from './session/sessionReducer';
import {Action} from 'redux-actions';
import {ISystemState} from '../../@types/system';

const systemReducer = (state: ISystemState, action: Action<any>) => ({
  session: sessionReducer(state && state.session, action)
});

export default systemReducer;
