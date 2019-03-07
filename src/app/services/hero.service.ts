import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Hero } from '../models/hero';
import { environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  apiUrl = environment.apiUrl;
  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService) { }


  private log(message: string) {
    this.messageService.add(`EmployeeService; ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  public createHero(hero: Hero) {

  }

  public updateHero(hero: Hero): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}user`, hero, httpOptions)
      .pipe(
        tap(_ => this.log(`updated employee id=${hero.id}`)),
        catchError(this.handleError<any>(`updateEmployee id=${hero.id}`))
      );
  }

  public getHero(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.apiUrl}user/${id}`)
      .pipe(
        tap(_ => this.log(`fetched employee id=${id}`)),
        catchError(this.handleError<Hero>(`getEmployee id=${id}`))
      );
  }

  public deleteHero(id: number) {

  }

  public getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.apiUrl}users`)
      .pipe(
        tap(_ => this.log('fetched employees')),
        catchError(this.handleError<Hero[]>('getEmployees', []))
      );
  }
}
