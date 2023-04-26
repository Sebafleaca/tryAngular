import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ScientistService } from './scientist.service';

describe('ScientistService', () => {
  let service: ScientistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ScientistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
