import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";

import { Color } from "../models/colors";
import { AppendColor, RemoveColor, RefreshColors } from "../actions/color-actions";
import { ColorsApiService } from "../services/colors-api.service";
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs";

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

  constructor(private colorsApi: ColorsApiService) { }

  @Action(RefreshColors)
  refreshColors(ctx: StateContext<IColorToolStateModel>) {
    return this.colorsApi.all()
      .pipe(
        tap(colors => ctx.patchState({ colors })),
        catchError((err: any) => {
          // patch state to show an error
          // return a dispatch that fires off a set error action
          // do some other operation that returns an observable
          console.log(err);
          ctx.patchState({ colors: [] })
          return of([]);
        }),
      );
  }

  // STEP 6: Run the reducer to apply the action to the current state, to create a new state
  @Action(AppendColor) // connects the action type to this reducer function
  appendColor(ctx: StateContext<IColorToolStateModel>, action: AppendColor) {
    return this.colorsApi
      .append(action.color)
      .pipe(tap(() => ctx.dispatch(new RefreshColors())));
  }

  @Action(RemoveColor)
  removeColor(ctx: StateContext<IColorToolStateModel>, action: RemoveColor) {

    const colors = ctx.getState().colors;

    // similar to this.users$.next(colors)
    // creating a new state, replacing the properties passed into
    // patch state

    // const updatedState = {
    //   colors: colors.filter(c => c.id !== action.colorId),
    // };

    // ctx.patchState(updatedState);

    // const currentState = ctx.getState();

    // ctx.setState({
    //   ...currentState,
    //   colors: colors.filter(c => c.id !== action.colorId),
    // });


    ctx.patchState({
      colors: colors.filter(c => c.id !== action.colorId),
    });

  }

}