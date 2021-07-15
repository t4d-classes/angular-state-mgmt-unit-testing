import { Injectable } from "@angular/core";
import { State, Action, StateContext, Selector, Actions, ofActionDispatched, Store } from "@ngxs/store";
import { patch } from '@ngxs/store/operators';

import { SetIsLoading, UnsetIsLoading, SetErrorMessage, ClearErrorMessage } from "../actions/status-actions";
import { tap, switchMap, catchError, filter } from "rxjs/operators";
import { of } from "rxjs";

export interface StatusStateModel {
  isLoading: boolean;
  errorMessage: string;
}

@State<StatusStateModel>({
  name: 'status',
  defaults: {
    isLoading: false,
    errorMessage: '',
  },
})
@Injectable()
export class StatusState {

  @Selector()
  static isLoading(state: StatusStateModel) {
    return state.isLoading;
  }

  @Selector()
  static errorMessage(state: StatusStateModel) {
    return state.errorMessage;
  }

  constructor(private store: Store, private actions$: Actions) {

    // this.actions$.pipe(filter(action => {
    //   console.log(action);
    //   return action.status === 'DISPATCHED' &&
    //     !(action.action instanceof ClearErrorMessage) &&
    //     !(action.action instanceof SetErrorMessage) &&
    //     !(action.action instanceof SetIsLoading) &&
    //     !(action.action instanceof UnsetIsLoading);

    // })).subscribe({
    //   // next: () => console.log('here'),
    //   next: () => this.store.dispatch(new ClearErrorMessage()),
    // });

  }

  @Action(SetIsLoading)
  setIsLoading(ctx: StateContext<StatusStateModel>) {
    ctx.setState(
      patch({ isLoading: true }),
    );
  }

  @Action(UnsetIsLoading)
  unsetIsLoading(ctx: StateContext<StatusStateModel>) {
    ctx.setState(
      patch({ isLoading: false }),
    );
  }

  @Action(SetErrorMessage)
  setErrorMessage(ctx: StateContext<StatusStateModel>, action: SetErrorMessage) {
    ctx.setState(
      patch<Partial<StatusStateModel>>({ errorMessage: action.message }),
    );  
  }

  @Action(ClearErrorMessage)
  clearErrorMessage(ctx: StateContext<StatusStateModel>) {
    ctx.setState(
      patch<Partial<StatusStateModel>>({ errorMessage: '' }),
    );  
  }


}