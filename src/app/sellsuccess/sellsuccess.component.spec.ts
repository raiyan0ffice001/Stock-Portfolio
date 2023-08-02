import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellsuccessComponent } from './sellsuccess.component';

describe('SellsuccessComponent', () => {
  let component: SellsuccessComponent;
  let fixture: ComponentFixture<SellsuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellsuccessComponent]
    });
    fixture = TestBed.createComponent(SellsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
