import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";

import { Add, Subtract, Multiply, Divide } from "../actions/calc-actions";

export interface ICalcToolStateModel {
  result: number;
}

@State<ICalcToolStateModel>({
  name: 'calcTool',
  defaults: {
    result: 0,
  },
})
@Injectable()
export class CalcToolState {

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

}