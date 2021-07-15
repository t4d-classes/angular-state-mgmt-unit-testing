import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

type Id = string | number;

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input()
  items: any[] = [];

  @Output()
  deleteItem = new EventEmitter<Id>();

  @Input()
  content: (item: any) => string = item => item;

  @Input()
  id: (item: any) => Id = item => item;

  constructor() { }

  ngOnInit() {
  }

  doDeleteItem(itemId: Id) {
    this.deleteItem.emit(itemId);
  }

}
