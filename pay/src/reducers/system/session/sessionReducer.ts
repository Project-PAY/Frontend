import {createActions, handleActions, Action} from 'redux-actions';
import {ISessionState} from '../../../@types/system';

export const SAVE_SESSION = 'SAVE_SESSION';
export const FETCH_REFRESH_TOKEN = 'FETCH_REFRESH_TOKEN';
export const CLEAR_SESSION = 'CLEAR_SESSION';

export const {
  saveSession,
  fetchRefreshToken,
  clearSession
} = createActions({
  [SAVE_SESSION]: (payload: ISessionState) => payload,
  [FETCH_REFRESH_TOKEN]: (payload: ISessionState) => payload,
  [CLEAR_SESSION]: () => null
});

export const DEFAULT_SESSION: ISessionState = {
  access: null,
  refresh: null
};

const sessionReducer = handleActions(
  {
    [saveSession.toString()]: (
      state: ISessionState,
      {payload: session}: Action<ISessionState>,
    ) => ({
      ...state,
      ...session
    }),
    [fetchRefreshToken.toString()]: (state: ISessionState) => state,
    [clearSession.toString()]: (state: ISessionState) => ({
      ...state,
      ...DEFAULT_SESSION
    })
  },
  DEFAULT_SESSION,
);

export default sessionReducer;
