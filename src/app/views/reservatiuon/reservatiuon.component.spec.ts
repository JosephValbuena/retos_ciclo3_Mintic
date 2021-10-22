import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservatiuonComponent } from './reservatiuon.component';

describe('ReservatiuonComponent', () => {
  let component: ReservatiuonComponent;
  let fixture: ComponentFixture<ReservatiuonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservatiuonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservatiuonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
