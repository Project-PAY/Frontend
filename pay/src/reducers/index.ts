import {ISystemState} from "../@types/system";
import {combineReducers} from "redux";
import system from './system';
import info from './info';
import {InfoState} from "../@types/info";

export interface IRootState {
  system: ISystemState;
  info: InfoState;
}

const rootReducer = combineReducers({
  system,
  info
});

export default rootReducer;
