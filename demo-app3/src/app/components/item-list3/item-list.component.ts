import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { Item } from '../../models/items';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService
      .all()
      .subscribe(items => this.items = items);
  }

  doDeleteItem(itemId: number) {
    this.itemsService
      .remove(itemId)
      .pipe(switchMap(() => this.itemsService.all()))
      .subscribe(items => this.items = items);
  }

  doRefresh() {
    this.itemsService
      .all()
      .subscribe(items => this.items = items);
  }

}
