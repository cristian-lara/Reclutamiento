import { TestBed } from '@angular/core/testing';

import { GitServicioService } from './git-servicio.service';

describe('GitServicioService', () => {
  let service: GitServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
