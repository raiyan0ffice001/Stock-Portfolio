import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesuccessComponent } from './updatesuccess.component';

describe('UpdatesuccessComponent', () => {
  let component: UpdatesuccessComponent;
  let fixture: ComponentFixture<UpdatesuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatesuccessComponent]
    });
    fixture = TestBed.createComponent(UpdatesuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
