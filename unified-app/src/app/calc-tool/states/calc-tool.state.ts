import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";

import { HistoryEntry } from '../models/history';
import { Add, Subtract, Multiply, Divide, ICalcOp } from "../actions/calc-actions";
import { DeleteHistoryEntry } from '../actions/history-actions';

export interface ICalcToolStateModel {
  result: number;
  history: HistoryEntry[];
}

@State<ICalcToolStateModel>({
  name: 'calcTool',
  defaults: {
    result: 0,
    history: [],
  },
})
@Injectable()
export class CalcToolState {

  @Action([ Add, Subtract, Multiply, Divide ])
  appendHistory(ctx: StateContext<ICalcToolStateModel>, action: ICalcOp) {
    const { history } = ctx.getState();
    ctx.patchState({
      history: [
        ...history,
        {
          id: Math.max(...history.map(h => h.id), 0) + 1,
          opName: action.opName,
          opValue: action.value,
        }
      ]
    });
  }

  @Action(Add)
  add(ctx: StateContext<ICalcToolStateModel>, action: Add) {
    const { result } = ctx.getState();
    ctx.patchState({
      result: result + action.value,
    });
  }

  @Action(Subtract)
  subtract(ctx: StateContext<ICalcToolStateModel>, action: Subtract) {
    const { result } = ctx.getState();
    ctx.patchState({
      result: result - action.value,
    });
  }

  @Action(Multiply)
  multiply(ctx: StateContext<ICalcToolStateModel>, action: Multiply) {
    const { result } = ctx.getState();
    ctx.patchState({
      result: result * action.value,
    });
  }

  @Action(Divide)
  divide(ctx: StateContext<ICalcToolStateModel>, action: Divide) {
    const { result } = ctx.getState();
    ctx.patchState({
      result: result / action.value,
    });
  }

  @Action(DeleteHistoryEntry)
  deleteHistoryEntry(ctx: StateContext<ICalcToolStateModel>, action: DeleteHistoryEntry) {
    const { history } = ctx.getState();

    ctx.patchState({
      history: history.filter(entry => entry.id !== action.entryId),
    });
  }

}