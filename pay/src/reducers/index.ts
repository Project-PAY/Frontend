import {ISystemState} from "../@types/system";
import {combineReducers} from "redux";
import system from './system';

export interface IRootState {
  system: ISystemState;
}

const rootReducer = combineReducers({
  system
});

export default rootReducer;
