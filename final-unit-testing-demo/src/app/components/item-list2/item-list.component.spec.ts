import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item } from 'src/app/models/items';
import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  const items: Item[] = [
    { id: 1, value: "item1" },
    { id: 2, value: "item2" },
    { id: 3, value: "item3" },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;

    component.items = items

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have list items', () => {

    const liElements = fixture.nativeElement.querySelectorAll('li') as HTMLLIElement[];

    expect(liElements.length).toBe(3);

    liElements.forEach((ele, i) => {
      expect(ele.textContent).toEqual(` ${items[i].value} X`)
    });

  });

  it('should call delete', () => {


    let deleteSpy = jest.fn();

    component.deleteItem.subscribe(deleteSpy);

    const buttonElement = fixture.nativeElement.querySelector('button') as HTMLButtonElement; 
    buttonElement.dispatchEvent(new Event('click'));

    expect(deleteSpy).toHaveBeenCalledWith(1);
  });  
});
