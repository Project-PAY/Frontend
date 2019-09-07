import Api from './base/Api';
import {TokenType} from '../@types/auth';
import {Id, Password} from '../@types/user';

interface IUserAuthForm {
  name: string;
  id: Id;
  password: Password;
}

class UserApi extends Api {
  constructor(token?: TokenType) {
    super({
      token,
      model: 'user'
    });
  }

  signup(form: IUserAuthForm) {
    return this.getAxios().post(`/${this.model}/auth/signup/`, form);
  }

  login(form: IUserAuthForm) {
    return this.getAxios().post(`/${this.model}/auth/login/`, form);
  }
}

export default UserApi;
