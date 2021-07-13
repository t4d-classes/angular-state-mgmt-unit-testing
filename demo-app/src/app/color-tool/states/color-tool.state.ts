import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";

import { Color, NewColor } from "../models/colors";
import { AppendColor } from "../actions/color-actions";

export interface IColorToolStateModel {
  colors: Color[];
}

@State<IColorToolStateModel>({
  name: 'colorTool',
  // STEP: 1 - State
  defaults: {
    colors: [],
  },
})
@Injectable()
export class ColorToolState {

  // STEP 6: Run the reducer to apply the action to the current state, to create a new state
  @Action(AppendColor) // connects the action type to this reducer function
  appendColor(ctx: StateContext<IColorToolStateModel>, action: AppendColor) {
    // this is the reducer function

    const colors = ctx.getState().colors;

    // similar to this.users$.next(colors)
    // creating a new state, replacing the properties passed into
    // patch state
    ctx.patchState({
      colors: [
        ...colors,
        {
          ...action.color,
          id: Math.max(...colors.map(c => c.id), 0) + 1,
        },
      ],
    });
  }

}