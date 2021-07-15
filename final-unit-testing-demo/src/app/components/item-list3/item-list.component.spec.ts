import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';


import { Item } from '../../models/items';
import { ItemsService } from '../../services/items.service';
import { ItemListComponent } from './item-list.component';



describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let fakeItemsServiceAll: any;
  let fakeItemsServiceRemove: any;

  beforeEach(async () => {

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

    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ ItemListComponent ],
      providers: [ { provide: ItemsService, useValue: fakeItemsService } ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have list items', () => {

    const liElements = fixture.nativeElement.querySelectorAll('li') as HTMLLIElement[];

    expect(liElements.length).toBe(3);

    const items = [
      'item1', 'item2', 'item3'
    ]

    liElements.forEach((ele, i) => {
      expect(ele.textContent).toEqual(` ${items[i]} X`)
    });

  });

  it('should call delete and remove item', () => {

    const buttonElement = fixture.nativeElement.querySelector('li > button') as HTMLButtonElement; 
    buttonElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(fakeItemsServiceRemove).toHaveBeenCalledWith(1);
    expect(fakeItemsServiceAll).toHaveBeenCalled();

    const liElements = fixture.nativeElement.querySelectorAll('li') as HTMLLIElement[];
    expect(liElements.length).toBe(2);

  });  

  it('should call refresh items', () => {

    const buttonElement = fixture.nativeElement.querySelector('button') as HTMLButtonElement; 
    buttonElement.dispatchEvent(new Event('click'));

    expect(fakeItemsServiceAll).toHaveBeenCalled();
  });  

});
