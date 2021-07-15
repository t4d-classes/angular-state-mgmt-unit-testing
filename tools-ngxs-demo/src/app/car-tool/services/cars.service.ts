import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from '../models/car';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CarsService {

  constructor(
    private httpClient: HttpClient,
    private api: ApiService,
  ) { }

  allCars() {
    return this.httpClient
      .get<Car[]>(this.api.carsUrl);
  }

  appendCar(car: Car) {
    return this.httpClient
      .post<Car>(this.api.carsUrl, car);
  }

  removeCar(carId: number) {
    return this.httpClient
      .delete<void>(`${this.api.carsUrl}/${encodeURIComponent(String(carId))}`);
  }

  replaceCar(car: Car) {
    return this.httpClient
      .put<Car>(`${this.api.carsUrl}/${encodeURIComponent(String(car.id))}`, car);
  }
}
