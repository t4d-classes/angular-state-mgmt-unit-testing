import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let items: string[];

  beforeEach(async () => {

    items = [
      'item1', 'item2', 'item3'
    ];

    await TestBed.configureTestingModule({
      declarations: [ItemListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;

    component.items = items;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate a list of items', () => {

    const liElements = fixture.nativeElement.querySelectorAll('li') as HTMLLIElement[];

    expect(liElements.length).toEqual(items.length);

    liElements.forEach((ele, i) => {
      expect(ele.textContent).toEqual(items[i]);
    });

  });
});
