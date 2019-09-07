import {createActions, handleActions, Action} from 'redux-actions';
import {ISystemState, IDefaultSession} from '../../../@types/system';

export const SAVE_SESSION = 'SAVE_SESSION';
export const FETCH_REFRESH_TOKEN = 'FETCH_REFRESH_TOKEN';
export const CLEAR_SESSION = 'CLEAR_SESSION';

export const {
  saveSession,
  // fetchRefreshToken,
  clearSession,
  setMyId,
} = createActions({
  [SAVE_SESSION]: (payload: IDefaultSession) => payload,
  // [FETCH_REFRESH_TOKEN]: (payload: IDefaultSession) => payload,
  [CLEAR_SESSION]: () => null
});

export const DEFAULT_SESSION: IDefaultSession = {
  access: null,
  refresh: null
};

const sessionReducer = handleActions(
  {
    [saveSession.toString()]: (
      state: ISystemState,
      {payload: session}: Action<IDefaultSession>,
    ) => ({
      ...state,
      ...session
    }),
    // [fetchRefreshToken.toString()]: (state: ISystemState) => state,
    [clearSession.toString()]: (state: ISystemState) => ({
      ...state,
      ...DEFAULT_SESSION
    }),
  },
  DEFAULT_SESSION,
);

export default sessionReducer;
