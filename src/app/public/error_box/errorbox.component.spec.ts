import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorboxComponent } from './errorbox.component';

describe('ErrorboxComponent', () => {
  let component: ErrorboxComponent;
  let fixture: ComponentFixture<ErrorboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
