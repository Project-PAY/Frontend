export interface IBaseInfo {
  current_money: string;
  has_fixed_income: boolean;
  fixed_income?: string;
  income_cycle?: string;
}

export interface InfoState extends IBaseInfo {
  current_figure: string;
  left_day?: string;
  today_expenditure: string;
  this_month_expenditure: string;
  last_month_expenditure: string;
}
