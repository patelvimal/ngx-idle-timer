import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIdleTimerComponent } from './ngx-idle-timer.component';

describe('NgxIdleTimerComponent', () => {
  let component: NgxIdleTimerComponent;
  let fixture: ComponentFixture<NgxIdleTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxIdleTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIdleTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
