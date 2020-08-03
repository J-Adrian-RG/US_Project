import { TestBed } from '@angular/core/testing';

import { TutorialguardGuard } from './tutorialguard.guard';

describe('TutorialguardGuard', () => {
  let guard: TutorialguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TutorialguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
