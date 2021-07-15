import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Item } from '../models/items';
import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let itemsSvc: ItemsService;
  let http: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ ItemsService ],
  }));

  beforeEach(() => {
    http = TestBed.inject(HttpTestingController);
    itemsSvc = TestBed.inject(ItemsService);
  });

  it('should be created', () => {
    const service: ItemsService = TestBed.inject(ItemsService);
    expect(service).toBeTruthy();
  });

  it('should get all items', () => {

    const allItemsSpy = jest.fn();

    const expectedItems = [
      { id: 1, value: 'item1' },
      { id: 2, value: 'item2' },
      { id: 3, value: 'item3' },
    ];

    itemsSvc.all().subscribe(allItemsSpy);

    const req = http.expectOne('http://localhost:3060/items');
    expect(req.request.method).toEqual('GET');

    req.flush(expectedItems, {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
      statusText: 'OK',
    });

    expect(allItemsSpy).toHaveBeenCalledWith(expectedItems);

  });

  it('should delete a item', () => {

    const deleteItemSpy = jest.fn();

    const theItem: Item = { id: 1, value: 'item1' };

    itemsSvc.remove(theItem.id).subscribe(deleteItemSpy);

    const req = http.expectOne('http://localhost:3060/items/1');
    expect(req.request.method).toEqual('DELETE');

    req.flush(
      {},
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
        statusText: 'OK'
      }
    );

    expect(deleteItemSpy).toHaveBeenCalledWith({});
  });

  afterEach(() => {
    http.verify();
  });  
});
