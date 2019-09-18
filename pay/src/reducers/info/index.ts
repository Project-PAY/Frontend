import {createActions, handleActions, Action} from 'redux-actions';
import {InfoState} from '../../@types/info';

export const SAVE_INFO = 'SAVE_INFO';

export const {saveInfo} = createActions({
  [SAVE_INFO]: (payload: InfoState) => payload
});

export const DEFAULT_INFO: InfoState = {
  has_fixed_income: false,
  fixed_income: '',
  income_cycle: '',
  current_figure: '',
  current_money: '',
  left_day: '',
  today_expenditure: '',
  this_month_expenditure: '',
  last_month_expenditure: ''
};

const info = handleActions(
  {
    [saveInfo.toString()]: (
      state: InfoState,
      {payload}: Action<InfoState>
    ) => ({
      ...state,
      ...payload
    })
  },
  DEFAULT_INFO
);

export default info;
