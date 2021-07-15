import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';

import { Item } from '../models/items';
import { ItemToolState } from './item-tool.state';
import { RefreshItems, RemoveItem } from '../actions/item-actions';
import { ItemsService } from '../services/items.service';


  
describe('ItemTool', () => {
  let store: Store;
  let fakeItemsServiceAll: any;
  let fakeItemsServiceRemove: any;

  beforeEach(() => {

    let count = 0;

    let items: Item[] = [
      { id: 1, value: "item1" },
      { id: 2, value: "item2" },
      { id: 3, value: "item3" },
    ];

    const fakeItemsService = {
      all() {
        return of(items);
      },
      remove(itemId: number) {
        items = items.filter(c => c.id !== itemId );
        return of(true);
      },
    };    

    fakeItemsServiceAll = jest.spyOn(fakeItemsService, 'all');
    fakeItemsServiceRemove = jest.spyOn(fakeItemsService, 'remove');

    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ItemToolState])],
      providers: [ { provide: ItemsService, useValue: fakeItemsService } ],
    });

    store = TestBed.inject(Store);
  });

  it('refresh items', async () => {

    await store.dispatch(new RefreshItems()).toPromise();

    const items = store.selectSnapshot<Item[]>(state => state.itemTool.items);
    expect(items.length).toBe(3);
  });

  it('remove it', async () => {

    await store.dispatch(new RemoveItem(1)).toPromise();
    
    const items = store.selectSnapshot<Item[]>(state => state.itemTool.items);
    expect(items.length).toBe(2);

    expect(fakeItemsServiceAll).toHaveBeenCalled();
    expect(fakeItemsServiceRemove).toHaveBeenCalledWith(1);
  });


});