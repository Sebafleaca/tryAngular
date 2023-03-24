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

  constructor(private messageService: MessageService) { }
}
