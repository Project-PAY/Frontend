import Api from './base/Api';
import {TokenType} from '../@types/auth';
import {IBaseInfo} from '../@types/info';

class InfoApi extends Api {
  constructor(token?: TokenType) {
    super({
      token,
      model: 'info'
    });
  }

  getInfo() {
    return this.retrieve('');
  }

  setBaseInfo(form: IBaseInfo) {
    return this.getAxios().post(`/${this.model}/`, form);
  }
}

export default InfoApi;
