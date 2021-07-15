import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from 'src/app/models/items';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input()
  items: Item[] = [];

  @Output()
  deleteItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  doDeleteItem(itemId: number) {
    this.deleteItem.emit(itemId);
  }

}
