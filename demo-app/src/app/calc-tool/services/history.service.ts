import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HistoryEntry, NewHistoryEntry } from '../models/history';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get<HistoryEntry[]>(`${environment.apiUrl}/history`);
  }

  append(historyEntry: NewHistoryEntry) {
    return this.httpClient.post<HistoryEntry>(`${environment.apiUrl}/history`, historyEntry);
  }
}
