

export class Add {
  static readonly type = '[MathOp] Add';
  constructor(public value: number) { }
}

export class Subtract {
  static readonly type = '[MathOp] Subtract';
  constructor(public value: number) { }
}
