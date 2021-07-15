
export class Add {
  static readonly type = '[MathOp] Add';
  constructor(public value: number) { }
}

export class Subtract {
  static readonly type = '[MathOp] Subtract';
  constructor(public value: number) { }
}

export class Multiply {
  static readonly type = '[MathOp] Multiply';
  constructor(public value: number) { }
}

export class Divide {
  static readonly type = '[MathOp] Divide';
  constructor(public value: number) { }
}
