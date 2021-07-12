import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDisplayedCountComponent } from './users-displayed-count.component';

describe('UsersDisplayedCountComponent', () => {
  let component: UsersDisplayedCountComponent;
  let fixture: ComponentFixture<UsersDisplayedCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDisplayedCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDisplayedCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
