import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsuccessComponent } from './addsuccess.component';

describe('AddsuccessComponent', () => {
  let component: AddsuccessComponent;
  let fixture: ComponentFixture<AddsuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsuccessComponent]
    });
    fixture = TestBed.createComponent(AddsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
