
export class RefreshHistory {
  static readonly type = "[History] Refresh";
  constructor() { }
}

export class DeleteHistoryEntry {
  static readonly type = '[History] Delete Entry';
  constructor(public entryId: number) { }
}

export class ClearHistory {
  static readonly type = '[History] Clear';
  constructor() { }
}