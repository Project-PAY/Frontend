import {ISessionState} from "../@types/system";
import {combineReducers} from "redux";
import system from './system';

export interface IRootState {
  system: ISessionState;
}

const rootReducer = combineReducers({
  system
});

export default rootReducer;
