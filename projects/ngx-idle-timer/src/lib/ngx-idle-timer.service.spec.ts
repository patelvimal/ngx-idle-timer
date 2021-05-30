import { TestBed } from '@angular/core/testing';

import { NgxIdleTimerService } from './ngx-idle-timer.service';

describe('NgxIdleTimerService', () => {
  let service: NgxIdleTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIdleTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
