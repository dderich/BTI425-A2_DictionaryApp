import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { englishTerm, nonEnglishTerm, definition, AddEnglish, AddDefinition, AddNonEnglish, languageCodes } from './data-classes';
@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  // Inject the HttpClient
  constructor(private http: HttpClient) { }

  // Base URL for the web API
  private urlEnglish: string = 'https://guarded-falls-31408.herokuapp.com/terms/english/';                        // http://localhost:8080/terms/english/
  private urlNonEnglish: string = 'https://guarded-falls-31408.herokuapp.com/terms/other/';                         // http://localhost:8080/terms/other/
  private profGetAll: string = 'https://pam-2020-a2and3webapi.herokuapp.com/api/terms/english';
  private langURL: string = "https://pam-2020-a2and3webapi.herokuapp.com/api/languages";
  // Options object for POST and PUT requests
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  // Error handler, from the Angular docs
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // ENGLISH TERMS
  getAllEnglishTerms(): Observable<englishTerm[]> {
    return this.http.get<englishTerm[]>(`${this.urlEnglish}`);
  }

  getOneEnglishTerm(id: any): Observable<englishTerm> {
    return this.http.get<englishTerm>(`${this.urlEnglish}${id}`);
  }

  getSomeEnglishTerms(eng: string): Observable<englishTerm[]> {
    return this.http.get<englishTerm[]>(`${this.urlEnglish}word/${eng}`);
  }
  // ENGLISH TERMS - increments
  incrementEnglishLike(id: string, currentDefinition: definition): Observable<englishTerm> { // CHANGED----
    return this.http.put<englishTerm>(`${this.urlEnglish}definition-like/${id}`, currentDefinition, this.httpOptions);
  }

  EnglishHelpYes(id: string, term: englishTerm): Observable<englishTerm> {
    return this.http.put<englishTerm>(`${this.urlEnglish}helpyes/${id}`, term, this.httpOptions);
  }

  EnglishHelpNo(id: string, term: englishTerm): Observable<englishTerm> {
    return this.http.put<englishTerm>(`${this.urlEnglish}helpno/${id}`, term, this.httpOptions);
  }
  // ENGLISH TERMS - add new English Term
  AddNewTermEnglish(newTerm: AddEnglish): Observable<englishTerm> {
    return this.http.post<englishTerm>(`${this.urlEnglish}`, newTerm, this.httpOptions)
      .pipe(tap((newTerm: englishTerm) => console.log("Added eng Term - ${newTerm.wordEnglish}")), catchError(this.handleError<englishTerm>('English Term Function')));
  }

  // ENGLISH TERMS - add definition
  AddNewDefToEnglish(id: string, newDef: AddDefinition): Observable<englishTerm> {
    return this.http.put<englishTerm>(`${this.urlEnglish}${id}/add-definition`, newDef, this.httpOptions); // add pipe, tap
  }






  // NON ENGLISH
  getAllNonEnglishTerms(): Observable<nonEnglishTerm[]> {
    return this.http.get<nonEnglishTerm[]>(`${this.urlNonEnglish}`);
  }

  getOneNonEnglishTerm(id: string): Observable<nonEnglishTerm> {
    return this.http.get<nonEnglishTerm>(`${this.urlNonEnglish}detail/${id}`);
  }

  getSomeNonEnglishTermByEngID(id: string): Observable<nonEnglishTerm[]> {
    return this.http.get<nonEnglishTerm[]>(`${this.urlNonEnglish}byeng/${id}`);
  }

  // NON ENGLISH INCREMENTS
  incrementNonEnglishLike(id: string, currentDef: definition): Observable<nonEnglishTerm> { // CHANGED-----------------------
    return this.http.put<nonEnglishTerm>(`${this.urlNonEnglish}definition-like/${id}`, currentDef, this.httpOptions);
  }

  NonEnglishHelpYes(id: string, term: nonEnglishTerm): Observable<nonEnglishTerm> {
    return this.http.put<nonEnglishTerm>(`${this.urlNonEnglish}helpyes/${id}`, term, this.httpOptions);
  }

  NonEnglishHelpNo(id: string, term: nonEnglishTerm): Observable<nonEnglishTerm> {
    return this.http.put<nonEnglishTerm>(`${this.urlNonEnglish}helpno/${id}`, term, this.httpOptions);
  }

  // ADD NEW NON ENGLISH TERM
  AddNewTermNonEnglish(newTerm: AddNonEnglish): Observable<nonEnglishTerm> {
    return this.http.post<nonEnglishTerm>(`${this.urlNonEnglish}`, newTerm, this.httpOptions);
  }

  // ADD NEW NON ENGLISH TERM - DEFINITION
  AddNewDefToNonEnglish(id: string, newDef: AddDefinition): Observable<nonEnglishTerm> {
    return this.http.put<nonEnglishTerm>(`${this.urlNonEnglish}${id}/add-definition`, newDef, this.httpOptions);
  }




  // fetch language names
  getLang(): Observable<languageCodes[]> {
    return this.http.get<languageCodes[]>(`${this.langURL}`);
  }
}