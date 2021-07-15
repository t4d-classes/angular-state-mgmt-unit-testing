

export class DeleteHistoryEntry {
  static readonly type = '[History] Delete Entry';
  constructor(public entryId: number) { }
}