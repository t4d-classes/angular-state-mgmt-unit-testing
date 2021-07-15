import { NewColor } from "../models/colors";

export class RefreshColors {
  static readonly type = '[Colors] Refresh';
  constructor() { }
}

export class BrokenRefreshColors {
  static readonly type = '[Colors] Broken Refresh';
  constructor() { }
}

export class AppendColor {
  static readonly type = '[Colors] Append';
  constructor(public color: NewColor) { }
}

export class RemoveColor {
  static readonly type = '[Colors] Remove';
  constructor(public colorId: number) { }
}
