import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";
import { patch } from '@ngxs/store/operators';

import { HistoryEntry } from '../models/history';
import { Add, Subtract, Multiply, Divide } from "../actions/calc-actions";
import { ClearHistory, DeleteHistoryEntry } from '../actions/history-actions';

export interface ICalcToolStateModel {
  history: HistoryEntry[];
}

@State<ICalcToolStateModel>({
  name: 'calcTool',
  defaults: {
    history: [],
  },
})
@Injectable()
export class CalcToolState {

  @Action(Add)
  add(ctx: StateContext<ICalcToolStateModel>, action: Add) {
    const { history } = ctx.getState();
    ctx.patchState({
      history: [
        ...history,
        {
          id: Math.max(...history.map(h => h.id), 0) + 1,
          opName: 'add',
          opValue: action.value,
        }
      ]
    });
  }

  @Action(Subtract)
  subtract(ctx: StateContext<ICalcToolStateModel>, action: Subtract) {
    const { history } = ctx.getState();
    ctx.patchState({
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
    const { history } = ctx.getState();
    ctx.patchState({
      history: [
        ...history,
        {
          id: Math.max(...history.map(h => h.id), 0) + 1,
          opName: 'divide',
          opValue: action.value,
        }
      ]
    });
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
    ctx.patchState({
      history: [],
    });

    // same as above...
    // ctx.setState(
    //   patch({ history: [] })
    // );
  }

}