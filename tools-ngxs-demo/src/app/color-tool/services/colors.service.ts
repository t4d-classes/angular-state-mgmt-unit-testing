import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Color } from '../models/color';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {

  constructor(
    private httpClient: HttpClient,
    private api: ApiService,
  ) { }

  allCars() {
    return this.httpClient
      .get<Color[]>(this.api.colorsUrl);
  }

  appendColor(color: Color) {
    return this.httpClient
      .post<Color>(this.api.colorsUrl, color);
  }

  removeColor(colorId: number) {
    return this.httpClient
      .delete<void>(`${this.api.colorsUrl}/${encodeURIComponent(String(colorId))}`);
  }

  replaceColor(color: Color) {
    return this.httpClient
      .put<Color>(`${this.api.colorsUrl}/${encodeURIComponent(String(color.id))}`, color);
  }
}
