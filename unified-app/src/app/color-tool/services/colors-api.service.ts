import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color, NewColor } from '../models/colors';
import { throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColorsApiService {

  constructor(private httpClient: HttpClient) { }

  allBroken() {
    return throwError("fake error");
  }

  all() {
    return this.httpClient.get<Color[]>(`${environment.apiUrl}/colors`);
  }

  append(color: NewColor) {
    return this.httpClient.post<Color>(`${environment.apiUrl}/colors`, color);
  }

  remove(colorId: number) {
    return this.httpClient.delete<void>(`${environment.apiUrl}/colors/${encodeURIComponent(colorId)}`);
  }
}
