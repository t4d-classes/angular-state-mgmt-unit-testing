export class SetErrorMessage {
  static readonly type = '[Status] Set Error Message';
  constructor(public message: string) { }
}

export class ClearErrorMessage {
  static readonly type = '[Status] Clear Error Message';
  constructor() { }
}

export class SetIsLoading {
  static readonly type = '[Status] Set Is Loading';
  constructor() { }
}

export class UnsetIsLoading {
  static readonly type = '[Status] Unset Is Loading';
  constructor() { }
}