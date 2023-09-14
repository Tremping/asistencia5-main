import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiservicioService } from './apiservicio.service';

describe('ApiservicioService', () => {
  let service: ApiservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient,HttpHandler]
    });
    service = TestBed.inject(ApiservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Testing getRamos', () => {
    service.getRamos();
    expect(service).toBeTruthy();
   });
});
