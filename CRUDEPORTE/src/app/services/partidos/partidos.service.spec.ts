import { TestBed } from '@angular/core/testing';

import { partidosService } from './partidos.service';

describe('partidosService', () => {
  let service: partidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(partidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
