import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoerrorpageComponent } from './noerrorpage.component';

describe('NoerrorpageComponent', () => {
  let component: NoerrorpageComponent;
  let fixture: ComponentFixture<NoerrorpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoerrorpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoerrorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
