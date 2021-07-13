import { NewColor } from "../models/colors";

// this is the Action
export class AppendColor {
  static readonly type = '[Colors] Append';
  constructor(public color: NewColor) { }
}

export class RemoveColor {
  static readonly type = '[Colors] Remove';
  constructor(public colorId: number) { }
}