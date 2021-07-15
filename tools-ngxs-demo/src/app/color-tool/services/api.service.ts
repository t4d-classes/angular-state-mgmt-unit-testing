import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useValue: { colorsUrl: 'http://localhost:4250/colors' }
})
export class ApiService {

  constructor() { }

  colorsUrl: string;
}
