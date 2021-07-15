import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useValue: { carsUrl: 'http://localhost:4250/cars' }
})
export class ApiService {

  constructor() { }

  carsUrl: string;
}
