import {TokenType} from "./auth";
import {HashId} from "./user";

export interface ISessionState {
  access: TokenType;
  refresh: TokenType;
}

export interface ISystemState {
  session: ISessionState;
}

export interface IDefaultSession {
  access: HashId;
  refresh: HashId;
}
