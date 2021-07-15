export class Add {
  static readonly type = '[MathOp] Add';
  opName = "Add";
  constructor(public value: number) { }
}

export class Subtract {
  static readonly type = '[MathOp] Subtract';
  opName = "Subtract";
  constructor(public value: number) { }
}

export class Multiply {
  static readonly type = '[MathOp] Multiply';
  opName = "Multiply";
  constructor(public value: number) { }
}

export class Divide {
  static readonly type = '[MathOp] Divide';
  opName = "Divide";
  constructor(public value: number) { }
}
