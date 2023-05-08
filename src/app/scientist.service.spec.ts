import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ScientistService } from './scientist.service';
import { MessageService } from './message.service';

import { Scientist } from './scientist';
import { Observable, of } from 'rxjs';

describe('ScientistService', () => {
  let service: ScientistService;
  let message: MessageService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let scientistsService: ScientistService;

  beforeEach(() => {    
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ScientistService);
    message = TestBed.inject(MessageService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    scientistsService = new ScientistService(httpClientSpy, message);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should return the list of scientists',() => {
    let listGot = service.getScientists();
    expect(listGot).not.toBeNull();
    expect(listGot instanceof Observable<Scientist[]>).toBeTrue();
  });

  it('should match right name');

  it('should add a scientist');

  it('should delete a scientist');

  it('should update a scientist');

  xit('should return the expected scientist using an httpSpy', 
  (done: DoneFn) => {
    const expectedScientist: Scientist[] = [
      { id: 0, name: 'mock', birth: 0, death: 100, nationality: 'none'}
    ]
    
    httpClientSpy.get.and.returnValue(of(expectedScientist));

    scientistsService.getScientists().subscribe({
      next: scientists => {
        expect(scientists).toEqual(expectedScientist);
        done();
      },
      error: done.fail
    });

    expect(httpClientSpy.get.calls.count())
    .toBe(1);
  });
});
