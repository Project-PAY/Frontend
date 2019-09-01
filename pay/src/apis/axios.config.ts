import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {cacheAdapterEnhancer} from 'axios-extensions';
import {TokenType} from '../@types/auth';
// import {BASE_URL} from '../../constants/env';

const BASE_URL = '';

export interface IAxiosInstanceConfig {
  multipart?: boolean;
  baseURL?: string;
  token?: TokenType;
  tokenPrefix?: string;
}

const axiosInstance = (axiosConfig?: IAxiosInstanceConfig) => {
  const {
    multipart = false,
    baseURL = BASE_URL,
    token = '',
    tokenPrefix = 'Bearer'
  } = axiosConfig || {};

  axios.defaults.headers.post['Content-Type'] = multipart ? 'multipart/form-data' : 'application/json';
  axios.defaults.headers.patch['Content-Type'] = multipart ? 'multipart/form-data' : 'application/json';

  const instance = axios.create({
    baseURL,
    headers: {
      ...(token
        ? { Authorization: tokenPrefix + ' ' + token }
        : {}),
    },
    adapter: cacheAdapterEnhancer(axios.defaults.adapter),
  });

  const axiosIntercepter = instance.interceptors.response.use(
    // 임시 타입 부여
    (res: any) => {
      if (typeof window !== 'undefined' && console.group) {
        console.group(
          '%c** HTTP Request',
          'font-size:20px;color:#42f4c2;font-weight:bold;font-family:sans-serif',
        );
        console.log(`%c${res.config.url.split(res.config.baseURL).join('')}`, 'font-size:14px;color:#333;');
        console.log(`%cStatus: ${res.status}`, 'font-size:14px;color:#2fcc00;font-family:sans-serif');
        console.dir(res.data);
        console.groupEnd();
      }
      switch (res.status) {
      case 200:
      case 201:
      case 204:
        break;
      case 400:
      case 401:
      case 403:
      case 405:
      case 413:
      case 409:
        if (res.data.error) {
          alert(res.data.message);
        }
        return Promise.reject(res);
      }
      return Promise.resolve(res);
    },
    err => {
      if (err.response && err.response.status) {
        switch (err.response.status) {
        case 400:
        case 403:
          if (err.response.data.message) {
            alert(err.response.data.message);
          }
          break;
        // case 404:
        //     break;
        case 401:
          try {
            axios.interceptors.response.eject(axiosIntercepter);
            // const {refresh} = _store.getState().userInfo;
            // if (refresh) {
            //     TokenApi.refresh(refresh)
            //         .then((response: { data: Object, status: number }) => {
            //             // _store.dispatch(setUserInfo(response.data));
            //             // if (err.request.responseURL.indexOf('verify') === -1) {
            //             // 요청 주소가 /login 이 아닐 때
            //             const tokenReload: number =
            //                 parseInt(localStorage.getItem('token_reload')) || 0;
            //             localStorage.setItem('token_reload', tokenReload + 1);
            //             setTimeout(() => location.reload(), 200);
            //             // }
            //             // return axiosInstance(
            //             //     response.data.token,
            //             //     isMultiPart,
            //             //     responseErrCallback,
            //             //     isBaseUrl
            //             // );
            //         }).catch(() => {
            //         // _history.push('/logout');
            //     });
            // } else {
            // if (err.request.responseURL.indexOf('login') === -1) {
            //     alert('세션이 만료됐습니다. 로그인 후 서비스를 이용해주세요');
            //     Session.removeToken();
            //     _history.push('/login');
            // }
            // }
          } catch (err) {
            // _history.push('/logout');
          }
          break;
        case 500:
          typeof alert !== 'undefined' && alert('서버에서 오류가 발생했습니다. 관리자에게 문의하세요');
          break;
        // case 403:
        //     alert('접근 권한이 없습니다.');
        //     _history.goBack();
        //     break;
        default:
          if (err.response.data.message) {
            console.log(err.response.status);
            console.log(err.response.data.message);
          }
        }
      }
      return Promise.reject(err);
    },
  );
  return instance;
};

export default axiosInstance;

// Coded by @kisug
