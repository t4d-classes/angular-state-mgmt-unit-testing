import { Injectable } from "@angular/core";
import { State, Action, StateContext, Actions } from "@ngxs/store";
import { patch } from '@ngxs/store/operators';
import { tap, switchMap } from "rxjs/operators";
import { of } from 'rxjs';

import { HistoryEntry } from '../models/history';
import { Add, Subtract, Multiply, Divide } from "../actions/calc-actions";
import { ClearHistory, DeleteHistoryEntry, RefreshHistory } from '../actions/history-actions';
import { SetErrorMessage, ClearErrorMessage } from "../actions/status-actions";
import { HistoryService } from "../services/history.service";

export interface ICalcToolStateModel {
  history: HistoryEntry[];
  errorMessage: string;
}

@State<ICalcToolStateModel>({
  name: 'calcTool',
  defaults: {
    history: [],
    errorMessage: '',
  },
})
@Injectable()
export class CalcToolState {

  constructor(private actions$: Actions, private historySvc: HistoryService) {
    this.actions$.pipe(tap(a => {
      console.log(a);
    })).subscribe();
  }

  appendHistoryEntry(ctx: StateContext<ICalcToolStateModel>, opName: string, opValue: number) {
    return ctx.dispatch(new ClearErrorMessage()).pipe(switchMap(() => {
      return this.historySvc
        .append({ opName, opValue })
        .pipe(switchMap(() => ctx.dispatch(new RefreshHistory())));
    }));
  }

  @Action(RefreshHistory)
  refreshHistory(ctx: StateContext<ICalcToolStateModel>) {
    return this.historySvc.all().pipe(tap(history => ctx.patchState({
      history,
    })));
  }

  @Action(Add)
  add(ctx: StateContext<ICalcToolStateModel>, action: Add) {

    // ignore clearing the message, do the append, and do the refresh as a side-effect
    // return this.historySvc
    //   .append({ opName: 'add', opValue: action.value })
    //   .pipe(tap((r) => {
    //     console.log(r);
    //     ctx.dispatch(new RefreshHistory());
    //   }));

    // ignore clearing the message, do the append and refresh in the same pipeline
    // return this.historySvc
    //   .append({ opName: 'add', opValue: action.value })
    //   .pipe(switchMap((r) => {
    //     console.log(r);
    //     return ctx.dispatch(new RefreshHistory());
    //   }));

    // clear the message, do the append/refresh as a side-effect
    // return ctx.dispatch(new ClearErrorMessage()).pipe(tap(() => {
    //   this.historySvc
    //     .append({ opName: 'add', opValue: action.value })
    //     .pipe(switchMap((r) => {
    //       console.log(r);
    //       return ctx.dispatch(new RefreshHistory());
    //     })).subscribe();
    // }));

    // clear the message and do the append/refresh in the same pipeline
    // return ctx.dispatch(new ClearErrorMessage()).pipe(switchMap(() => {
    //   return this.historySvc
    //     .append({ opName: 'add', opValue: action.value })
    //     .pipe(switchMap((r) => {
    //       console.log(r);
    //       return ctx.dispatch(new RefreshHistory());
    //     }));
    // }));
    return this.appendHistoryEntry(ctx, 'add', action.value);
  }

  @Action(Subtract)
  subtract(ctx: StateContext<ICalcToolStateModel>, action: Subtract) {
    return this.appendHistoryEntry(ctx, 'subtract', action.value);

  }

  @Action(Multiply)
  multiply(ctx: StateContext<ICalcToolStateModel>, action: Multiply) {
    return this.appendHistoryEntry(ctx, 'multiply', action.value);
  }

  @Action(Divide)
  divide(ctx: StateContext<ICalcToolStateModel>, action: Divide) {

    if (action.value === 0) {
      return ctx.dispatch(new SetErrorMessage("Cannot divide by 0"));
    }

    return this.appendHistoryEntry(ctx, 'divide', action.value);
  }

  @Action(DeleteHistoryEntry)
  deleteHistoryEntry(ctx: StateContext<ICalcToolStateModel>, action: DeleteHistoryEntry) {
    return this.historySvc
      .remove(action.entryId)
      .pipe(switchMap(() => ctx.dispatch(new RefreshHistory())));
  }

  @Action(ClearHistory)
  clearHistory(ctx: StateContext<ICalcToolStateModel>) {
    return ctx.dispatch(new ClearErrorMessage())
      .pipe(
        switchMap(() => this.historySvc.removeAll()),
        switchMap(() => ctx.dispatch(new RefreshHistory())),
      );
  }

  @Action(SetErrorMessage)
  setErrorMessage(ctx: StateContext<ICalcToolStateModel>, action: SetErrorMessage) {
    ctx.patchState({
      errorMessage: action.message,
    })
  }

  @Action(ClearErrorMessage)
  clearErrorMessage(ctx: StateContext<ICalcToolStateModel>) {
    ctx.patchState({
      errorMessage: '',
    })
  }

}