import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HistoryEntry, NewHistoryEntry } from '../models/history';
import { environment } from 'src/environments/environment';
import { zip, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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

  remove(historyEntryId: number) {
    return this.httpClient
      .delete<HistoryEntry>(`${environment.apiUrl}/history/${encodeURIComponent(historyEntryId)}`);
  }

  removeAll() {
    return this.httpClient
      .get<HistoryEntry[]>(`${environment.apiUrl}/history`)
      .pipe(
        switchMap(history => forkJoin(history.map(entry => this.remove(entry.id))))
      );
  }

}
