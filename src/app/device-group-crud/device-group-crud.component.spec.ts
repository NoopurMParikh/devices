import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceGroupCrudComponent } from './device-group-crud.component';

describe('DeviceGroupCrudComponent', () => {
  let component: DeviceGroupCrudComponent;
  let fixture: ComponentFixture<DeviceGroupCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceGroupCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceGroupCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
