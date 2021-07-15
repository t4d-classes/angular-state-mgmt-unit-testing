import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HistoryEntry } from '../models/history';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get<HistoryEntry[]>(`${environment.apiUrl}/history`);
  }
}
