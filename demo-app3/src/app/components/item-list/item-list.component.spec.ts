import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  const items = [
    'item1', 'item2', 'item3'
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
      expect(ele.textContent).toEqual(items[i])
    });

  });
});
