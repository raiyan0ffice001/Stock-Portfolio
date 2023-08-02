import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuysuccessComponent } from './buysuccess.component';

describe('BuysuccessComponent', () => {
  let component: BuysuccessComponent;
  let fixture: ComponentFixture<BuysuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuysuccessComponent]
    });
    fixture = TestBed.createComponent(BuysuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
