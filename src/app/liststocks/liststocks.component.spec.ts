import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstocksComponent } from './liststocks.component';

describe('ListstocksComponent', () => {
  let component: ListstocksComponent;
  let fixture: ComponentFixture<ListstocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListstocksComponent]
    });
    fixture = TestBed.createComponent(ListstocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
