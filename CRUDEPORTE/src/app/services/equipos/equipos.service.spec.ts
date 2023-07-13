import { TestBed } from '@angular/core/testing';

import { equiposService } from './equipos.service';

describe('TipoejerciciosService', () => {
  let service: equiposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(equiposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
