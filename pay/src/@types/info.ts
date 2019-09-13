export interface IBaseInfo {
  current_money: number;
  has_fixed_income: boolean;
  fixed_income?: number;
  income_cycle?: number;
}

export interface InfoState extends IBaseInfo {

}
