import sessionReducer from './session/sessionReducer';
import {Action} from 'redux-actions';
import {ISystemState, ISessionState} from '../../@types/system';

const systemReducer = (state: ISystemState, action: Action<ISessionState>) => ({
  session: sessionReducer(state && state.session, action)
});

export default systemReducer;
