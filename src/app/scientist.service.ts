import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Scientist } from './scientist';
import { SCIENTISTS } from './mock-scientists';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ScientistService {

  getScientists(): Observable<Scientist[]> {
    const scientists = of(SCIENTISTS);
    this.messageService.add('ScientistService: fetched scientists');
    return scientists;
  }

  getScientist(id: number): Observable<Scientist> {
    const scientist = SCIENTISTS.find(h => h.id === id)!;
    this.messageService.add(`ScientistService: fetched scientist id=${id}`);
    return of(scientist);
  }

  constructor(private messageService: MessageService) { }
}
