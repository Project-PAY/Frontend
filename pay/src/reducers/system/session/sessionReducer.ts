import {createActions, handleActions, Action} from 'redux-actions';

export const SAVE_SESSION = 'SAVE_SESSION';
export const FETCH_REFRESH_TOKEN = 'FETCH_REFRESH_TOKEN';
export const CLEAR_SESSION = 'CLEAR_SESSION';

export const {
  saveSession,
  fetchRefreshToken,
  clearSession,
  setMyId,
} = createActions({
  [SAVE_SESSION]: (payload) => payload,
  [FETCH_REFRESH_TOKEN]: (payload) => payload,
  [CLEAR_SESSION]: () => null
});

export const DEFAULT_SESSION: IDefaultSession = {
  access: null,
  refresh: null
};