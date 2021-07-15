import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { CarsState, EditCar, CancelCar, RemoveCar, AppendCar, ReplaceCar, RefreshCars } from '../../cars.state';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  @Select(CarsState.cars) cars$: Observable<Car[]>;

  @Select(CarsState.editCarId) editCarId$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new RefreshCars());
  }

  doEditCar(carId: number) {
    this.store.dispatch(new EditCar(carId));
  }

  doCancelCar() {
    this.store.dispatch(new CancelCar());
  }

  doAppendCar(car: Car) {
    this.store.dispatch(new AppendCar(car));
  }

  doReplaceCar(car: Car) {
    this.store.dispatch(new ReplaceCar(car));
  }

  doRemoveCar(carId: number) {
    this.store.dispatch(new RemoveCar(carId));
  }

}
