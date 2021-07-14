import { Injectable } from "@angular/core";
import { State, Action, StateContext, Actions } from "@ngxs/store";
import { patch } from '@ngxs/store/operators';
import { tap } from "rxjs/operators";
import { of } from 'rxjs';

import { HistoryEntry } from '../models/history';
import { Add, Subtract, Multiply, Divide } from "../actions/calc-actions";
import { ClearHistory, DeleteHistoryEntry } from '../actions/history-actions';
import { SetErrorMessage, ClearErrorMessage } from "../actions/status-actions";

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

  constructor(private actions$: Actions) {
    this.actions$.pipe(tap(a => {
      console.log(a);
    })).subscribe();
  }

  @Action(Add)
  add(ctx: StateContext<ICalcToolStateModel>, action: Add) {

    return ctx.dispatch(new ClearErrorMessage()).pipe(tap(() => {
      const { history } = ctx.getState();
      ctx.patchState({
        // errorMessage: '',
        history: [
          ...history,
          {
            id: Math.max(...history.map(h => h.id), 0) + 1,
            opName: 'add',
            opValue: action.value,
          }
        ]
      });
    }))


  }

  @Action(Subtract)
  subtract(ctx: StateContext<ICalcToolStateModel>, action: Subtract) {
    const { history } = ctx.getState();
    ctx.patchState({
      errorMessage: '',
      history: [
        ...history,
        {
          id: Math.max(...history.map(h => h.id), 0) + 1,
          opName: 'subtract',
          opValue: action.value,
        }
      ]
    });
  }

  @Action(Multiply)
  multiply(ctx: StateContext<ICalcToolStateModel>, action: Multiply) {
    const { history } = ctx.getState();
    ctx.patchState({
      errorMessage: '',
      history: [
        ...history,
        {
          id: Math.max(...history.map(h => h.id), 0) + 1,
          opName: 'multiply',
          opValue: action.value,
        }
      ]
    });
  }

  @Action(Divide)
  divide(ctx: StateContext<ICalcToolStateModel>, action: Divide) {

    if (action.value === 0) {
      // ctx.patchState({
      //   errorMessage: 'Cannot divide by 0.',
      // });
      return ctx.dispatch(new SetErrorMessage("Cannot divide by 0"));
    }


    const { history } = ctx.getState();
    ctx.patchState({
      errorMessage: '',
      history: [
        ...history,
        {
          id: Math.max(...history.map(h => h.id), 0) + 1,
          opName: 'divide',
          opValue: action.value,
        }
      ]
    });

    return of();
  }

  @Action(DeleteHistoryEntry)
  deleteHistoryEntry(ctx: StateContext<ICalcToolStateModel>, action: DeleteHistoryEntry) {
    const { history } = ctx.getState();

    ctx.patchState({
      history: history.filter(entry => entry.id !== action.entryId),
    });
  }

  @Action(ClearHistory)
  clearHistory(ctx: StateContext<ICalcToolStateModel>) {
    // ctx.patchState({
    //   history: [],
    // });

    // same as above...
    ctx.setState(
      patch<Partial<ICalcToolStateModel>>({
        errorMessage: '',
        history: [],
      }),
      // patch({ history: [] })
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