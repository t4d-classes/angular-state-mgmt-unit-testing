import { Injectable } from "@angular/core";
import { State, Action, StateContext, Selector } from "@ngxs/store";

import { Color } from "../models/colors";
import { RefreshColors, AppendColor, RemoveColor, BrokenRefreshColors } from "../actions/colors-actions";
import { SetIsLoading, SetErrorMessage, UnsetIsLoading } from "../actions/status-actions";
import { ColorsApiService } from "../services/colors-api.service";
import { tap, switchMap, catchError, map } from "rxjs/operators";
import { of } from "rxjs";


export type ColorsStateModel = Color[];

@State<ColorsStateModel>({
  name: 'colors',
  defaults: [],
})
@Injectable()
export class ColorsState {

  @Selector()
  static colors(state: ColorsStateModel) {
    return state;
  }

  constructor(private colorsApi: ColorsApiService) { }

  @Action(BrokenRefreshColors)
  brokenRefreshColors(ctx: StateContext<ColorsStateModel>) {

    ctx.dispatch(new SetIsLoading());

    return this.colorsApi.allBroken().pipe(
      tap(colors => {
        ctx.setState(colors);
      }),
      catchError( (err: any) => {
        return ctx.dispatch(new SetErrorMessage(err?.message || err))
          .pipe(
            tap(() => ctx.setState([])),
            map(() => of([]))
          );
      }),
      tap(() => {
        // console.log(ctx.getState().colors);
        ctx.dispatch(new UnsetIsLoading());
      }),
    );
  }

  @Action(RefreshColors)
  refreshColors(ctx: StateContext<ColorsStateModel>) {

    ctx.dispatch(new SetIsLoading());

    return this.colorsApi.all().pipe(
      tap(colors => {
        ctx.setState(colors);
      }),
      catchError( (err: any) => {
        return ctx.dispatch(new SetErrorMessage(err?.message || err))
          .pipe(
            tap(() => ctx.setState([])),
            map(() => of([]))
          );
      }),
      tap(() => {
        // console.log(ctx.getState().colors);
        ctx.dispatch(new UnsetIsLoading());
      }),
    );
  }

  @Action(AppendColor)
  appendColor(ctx: StateContext<ColorsStateModel>, action: AppendColor) {

    ctx.dispatch(new SetIsLoading());

    return this.colorsApi.append(action.color).pipe(
      switchMap(() => {
        return ctx.dispatch(new RefreshColors());
      })
    );

  }

  @Action(RemoveColor)
  removeColor(ctx: StateContext<ColorsStateModel>, action: RemoveColor) {

    ctx.dispatch(new SetIsLoading());

    return this.colorsApi.remove(action.colorId).pipe(
      switchMap(() => {
        return ctx.dispatch(new RefreshColors());
      })
    );

  }

}