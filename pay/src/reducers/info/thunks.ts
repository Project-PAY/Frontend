import {Dispatch} from 'redux';
import {IRootState} from '../';
import isEqual from 'lodash/isEqual';
import {DEFAULT_INFO, saveInfo} from './';
import InfoApi from '../../apis/InfoApi';

export const fetchInfo = () =>
  (dispatch: Dispatch, getState: () => IRootState) => {
    const {
      info,
      system: {
        session: {
          access
        }
      }
    } = getState();
    const infoApi = new InfoApi(access);
    
    if (access && isEqual(info, DEFAULT_INFO)) {
      infoApi.getInfo()
        .then(({data: {result}}) => {
          dispatch(saveInfo(result));
        })
        .catch(err => {
          console.error(err);
        });
    }
  };
