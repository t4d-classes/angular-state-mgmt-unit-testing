import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../models/items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get<Item[]>('http://localhost:3060/items');
  }

  remove(itemId: number) {
    return this.httpClient.delete<void>('http://localhost:3060/items/' + encodeURIComponent(itemId));
  }

}
