import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchMerchantsComponent } from './watch-merchants.component';

describe('WatchMerchantsComponent', () => {
  let component: WatchMerchantsComponent;
  let fixture: ComponentFixture<WatchMerchantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchMerchantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchMerchantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
