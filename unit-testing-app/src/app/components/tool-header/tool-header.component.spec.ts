import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolHeaderComponent } from './tool-header.component';

describe('ToolHeaderComponent', () => {
  let component: ToolHeaderComponent;
  let fixture: ComponentFixture<ToolHeaderComponent>;
  const headerText = "The Tool";
  const defaultHeaderText = "Placeholder";


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('default headerText input populates the header element text content', () => {
    fixture.detectChanges();
    const headerElement = fixture.nativeElement as HTMLHeadingElement;
    expect(headerElement.textContent).toEqual(defaultHeaderText);
  });

  it('headerText input populates the header element text content', () => {
    component.headerText = headerText;
    fixture.detectChanges();
    const headerElement = fixture.nativeElement as HTMLHeadingElement;
    expect(headerElement.textContent).toEqual(headerText);
  });

  it('headerText input populates the h1 element text content', () => {
    component.headerText = headerText;
    fixture.detectChanges();
    const h1Element = fixture.nativeElement.querySelector("h1") as HTMLHeadingElement;
    expect(h1Element.textContent).toEqual(headerText);

    // returns an array of elements
    const h1Elements = fixture.nativeElement.querySelectorAll("h1") as HTMLHeadingElement[];
    expect(h1Elements.length).toEqual(1);

  });

});

