import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingComponentComponent } from './routing-component.component';

describe('RoutingComponentComponent', () => {
  let component: RoutingComponentComponent;
  let fixture: ComponentFixture<RoutingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
