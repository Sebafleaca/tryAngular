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

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  getScientists(): Observable<Scientist[]> {
    return this.http.get<Scientist[]>(this.scientistsUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Scientist[]>('getScientists', []))
    );
  }

  getScientist(id: number): Observable<Scientist> {
    const url = `${this.scientistsUrl}/${id}`;
    return this.http.get<Scientist>(url)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Scientist>(`getHero id=${id}`))
      );
  }

  updateScientist(scientist: Scientist): Observable<any> {
    return this.http.put(this.scientistsUrl, scientist, this.httpOptions)
      .pipe(
        tap(_ => `updated scientist id=${scientist.id}`),
        catchError(this.handleError<any>('updateScientist'))
      )
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  addScientist(scientist: Scientist): Observable<Scientist> {
    return this.http.post<Scientist>(this.scientistsUrl, scientist, this.httpOptions)
      .pipe(
        tap((newScientist: Scientist) => this.log(`added scientist w/ id=${newScientist.id}`)),
        catchError(this.handleError<Scientist>('addScientist'))
      );
  }

  deleteScientist(id: number): Observable<Scientist> {
    const url = `${this.scientistsUrl}/${id}`

    return this.http.delete<Scientist>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted scientist id=${id}`)),
        catchError(this.handleError<Scientist>('deleteScientist'))
      );
  }

  searchScientists(term: string): Observable<Scientist[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Scientist[]>(`${this.scientistsUrl}/?name=${term}`)
      .pipe(
        tap(x => x.length ?
          this.log(`found scientist matching "${term}"`) : 
          this.log(`no scientists matching "${term}"`)),
        catchError(this.handleError<Scientist[]>('searchScientists', []))
      )
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
