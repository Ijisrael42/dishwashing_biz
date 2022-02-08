import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class CustomersApi {
  
  // endpoint: string = 'http://localhost:4000/customers';
  endpoint: string = 'https://dishwashing-biz.herokuapp.com/customers';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  create(data: Customer): Observable<any> {
    let API_URL = this.endpoint;
    return this.http.post(API_URL, data)
      .pipe( catchError(this.errorMgmt));
  }

  // Get all utensils
  getAll() { return this.http.get(`${this.endpoint}`); }

  // Get utensil
  get(id): Observable<any> {
    let API_URL = `${this.endpoint}/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe( 
        map((res: Response) => { return res || {} }),
        catchError(this.errorMgmt)
      );
  }

  // Update utensil
  update(id, data): Observable<any> {
    let API_URL = `${this.endpoint}/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Delete utensil
  delete(id): Observable<any> {
    var API_URL = `${this.endpoint}/${id}`;
    return this.http.delete(API_URL)
      .pipe( catchError(this.errorMgmt) )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}