export interface IBaseInfo {
  current_money: number;
  has_fixed_income: boolean;
  fixed_income?: number;
  income_cycle?: number;
}

export interface InfoState extends IBaseInfo {
  current_figure: number;
  left_day?: number;
  today_expenditure: number;
  this_month_expenditure: number;
  last_month_expenditure: number;
}
