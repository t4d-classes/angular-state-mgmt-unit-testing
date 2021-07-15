import { State, Selector, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { Car } from './models/car';
import { CarsService } from './services/cars.service';

export class RefreshCars {
  static readonly type = '[Cars] Refresh Cars';
}

export class AppendCar {
  static readonly type = '[Cars] AppendCar';
  constructor(public car: Car) { }
}

export class ReplaceCar {
  static readonly type = '[Cars] ReplaceCar';
  constructor(public car: Car) { }
}

export class RemoveCar {
  static readonly type = '[Cars] RemoveCar';
  constructor(public carId: number) { }
}

export class EditCar {
  static readonly type = '[Cars] EditCar';
  constructor(public carId: number) { }
}

export class CancelCar {
  static readonly type = '[Cars] CancelCar';
  constructor() { }
}

export interface CarsStateModel {
  cars: Car[];
  editCarId: number;
}

@State<CarsStateModel>({
  name: 'cars',
  defaults: {
    cars: [],
    editCarId: -1,
  }
})
export class CarsState {

  @Selector()
  static cars(state: CarsStateModel) {
    return state.cars;
  }

  @Selector()
  static editCarId(state: CarsStateModel) {
    return state.editCarId;
  }

  constructor(private carsSvc: CarsService) { }

  @Action(RefreshCars)
  refreshCars(ctx: StateContext<CarsStateModel>) {

    return this.carsSvc.allCars().pipe(
      tap(cars => {
        ctx.patchState({ cars });
        ctx.dispatch(new CancelCar());
      }),
    );
  }

  @Action(AppendCar)
  appendCar(ctx: StateContext<CarsStateModel>, action: AppendCar) {

    return this.carsSvc.appendCar(action.car).pipe(
      tap(() => {
        ctx.dispatch(new RefreshCars());
      })
    );

  }

  @Action(ReplaceCar)
  replaceCar(ctx: StateContext<CarsStateModel>, action: ReplaceCar) {

    return this.carsSvc.replaceCar(action.car).pipe(
      tap(() => {
        ctx.dispatch(new RefreshCars());
      })
    );
  }

  @Action(RemoveCar)
  removeCar(ctx: StateContext<CarsStateModel>, action: RemoveCar) {

    return this.carsSvc.removeCar(action.carId).pipe(
      tap(() => {
        ctx.dispatch(new RefreshCars());
      })
    );
  }

  @Action(EditCar)
  editCar(ctx: StateContext<CarsStateModel>, action: EditCar) {
    ctx.patchState({
      editCarId: action.carId,
    });
  }

  @Action(CancelCar)
  cancelCar(ctx: StateContext<CarsStateModel>) {
    ctx.patchState({
      editCarId: -1,
    });
  }
}
