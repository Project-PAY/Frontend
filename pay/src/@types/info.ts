export interface IBaseInfo {
  current_money: number | string;
  has_fixed_income: boolean;
  fixed_income?: number | string;
  income_cycle?: number | string;
}

export interface InfoState extends IBaseInfo {
  current_figure: number | string;
  left_day?: number | string;
  today_expenditure: number | string;
  this_month_expenditure: number | string;
  last_month_expenditure: number | string;
}
