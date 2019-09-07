import {TokenType} from "./auth";

export interface ISessionState {
  access: TokenType;
  refresh: TokenType;
}

export interface ISystemState {
  session: ISessionState;
}
