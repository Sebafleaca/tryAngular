import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';

import { Scientist } from './scientist';
import { SCIENTISTS } from './mock-scientists';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ScientistService {

  private scientistsUrl = 'api/scientists';

  /* Old tutorial.

  getScientists(): Observable<Scientist[]> {
    const scientists = of(SCIENTISTS);
    this.messageService.add('ScientistService: fetched scientists');
    return scientists;
  }
  */

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  getScientists(): Observable<Scientist[]> {
    return this.http.get<Scientist[]>(this.scientistsUrl)
      .pipe(
        catchError(this.handleError<Scientist[]>('getScientists', []))
    );
  }

  getScientist(id: number): Observable<Scientist> {
    const scientist = SCIENTISTS.find(h => h.id === id)!;
    this.messageService.add(`ScientistService: fetched scientist id=${id}`);
    return of(scientist);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add(`ScientistService: ${message}`);
  }
}
