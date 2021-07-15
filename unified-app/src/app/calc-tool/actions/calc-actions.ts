
export interface ICalcOp {
  opName: string;
  value: number;
}


export class Add implements ICalcOp {
  static readonly type = '[MathOp] Add';
  opName = "Add";
  constructor(public value: number) { }
}

export class Subtract implements ICalcOp {
  static readonly type = '[MathOp] Subtract';
  opName = "Subtract";
  constructor(public value: number) { }
}

export class Multiply implements ICalcOp {
  static readonly type = '[MathOp] Multiply';
  opName = "Multiply";
  constructor(public value: number) { }
}

export class Divide implements ICalcOp {
  static readonly type = '[MathOp] Divide';
  opName = "Divide";
  constructor(public value: number) { }
}
