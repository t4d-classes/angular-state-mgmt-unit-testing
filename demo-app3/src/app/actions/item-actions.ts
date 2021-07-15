

export class RefreshItems {
  static readonly type = "[Items] Refresh";
  constructor() { }
}

export class RemoveItem {
  static readonly type = "[Items] Remove";
  constructor(public itemId: number) { }
}