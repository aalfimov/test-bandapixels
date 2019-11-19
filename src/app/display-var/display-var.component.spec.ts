import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayVarComponent } from './display-var.component';

describe('DisplayVarComponent', () => {
  let component: DisplayVarComponent;
  let fixture: ComponentFixture<DisplayVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
