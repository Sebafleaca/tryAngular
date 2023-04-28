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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET scientists from the server */
  getScientists(): Observable<Scientist[]> {
  return this.http.get<Scientist[]>(this.scientistsUrl)
    .pipe(
      tap(_ => this.log('fetched scientists')),
      catchError(this.handleError<Scientist[]>('getScientists', []))
  );
  }

  /** GET scientist by id. Will 404 if id not found */
  getScientist(id: number): Observable<Scientist> {
    const url = `${this.scientistsUrl}/${id}`;
    return this.http.get<Scientist>(url)
      .pipe(
        tap(_ => this.log(`fetched scientist id=${id}`)),
        catchError(this.handleError<Scientist>(`getScientist id=${id}`))
      );
  }

  /** GET scientist by id. Return `undefined` when id not found */
  getScientistNo404<Data>(id: number): Observable<Scientist> {
    const url = `${this.scientistsUrl}/?id=${id}`;
    return this.http.get<Scientist[]>(url)
      .pipe(
        map(scientists => scientists[0]),
        tap(s => {
          const outcome = s ? 'fetched' : 'did not find';
          this.log(`${outcome} scientist id=${id}`);
        }),
        catchError(this.handleError<Scientist>(`getScientist id=${id}`))
      );
  }

  /** GET scientists whose name contains search term */
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

  /** POST: add a new scientist to the server */
  addScientist(scientist: Scientist): Observable<Scientist> {
    return this.http.post<Scientist>(this.scientistsUrl, scientist, this.httpOptions)
      .pipe(
        tap((newScientist: Scientist) => this.log(`added scientist w/ id=${newScientist.id}`)),
        catchError(this.handleError<Scientist>('addScientist'))
      );
  }

  /** DELETE: delete the scientist from the server */
  deleteScientist(id: number): Observable<Scientist> {
    const url = `${this.scientistsUrl}/${id}`

    return this.http.delete<Scientist>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted scientist id=${id}`)),
        catchError(this.handleError<Scientist>('deleteScientist'))
      );
  }

  /** PUT: update the scientist on the server */
  updateScientist(scientist: Scientist): Observable<any> {
    return this.http.put(this.scientistsUrl, scientist, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated scientist id=${scientist.id}`)),
        catchError(this.handleError<any>('updateScientist'))
      )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  /** Log a ScientistService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ScientistService: ${message}`);
  }
}
