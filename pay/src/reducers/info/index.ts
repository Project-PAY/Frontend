import {createActions, handleActions, Action} from 'redux-actions';
import {InfoState} from '../../@types/info';

export const SAVE_INFO = 'SAVE_INFO';

export const {saveInfo} = createActions({
  [SAVE_INFO]: (payload: InfoState) => payload
});

export const DEFAULT_INFO: InfoState = {
  has_fixed_income: false,
  fixed_income: 0,
  income_cycle: 0,
  current_figure: 0,
  current_money: 0,
  left_day: 0,
  today_expenditure: 0,
  this_month_expenditure: 0,
  last_month_expenditure: 0
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
