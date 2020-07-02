import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Ordinateur } from 'src/app/models/ordinateur';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class OrdinateurService {
  apiURL = 'http://localhost:3000/ordinateurs';
  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  marques: string[];
  types: string[];
  constructor(private http: HttpClient) { 
  this.marques = ["Dell", "HP", "Apple", "Asus"];
  this.types = ["Portable", "Fixe", "Tablette hybride"];
  }

  getAllOrdinateurs(): Observable<Ordinateur[]> {
    return this.http.get<Ordinateur[]>(this.apiURL).pipe(retry(1),catchError(this.handleError)
    );
     }

     getOneOrdinateurById(id: number): Observable<Ordinateur> {
      return this.http.get<Ordinateur>(this.apiURL + '/' +id).pipe(retry(1),catchError(this.handleError));
    }

    addOrdinateur(ordinateur: Ordinateur): Observable<Ordinateur> {
      return this.http.post<Ordinateur>(this.apiURL ,ordinateur).pipe(catchError(this.handleError));
    }

    editOrdinateur(ordinateur: Ordinateur): Observable<Ordinateur>{
      return this.http.put<Ordinateur>(this.apiURL + '/' + ordinateur.id ,ordinateur, this.httpOptions).pipe(catchError(this.handleError));
    }

    ordinateurDelete(id: number): Observable<Ordinateur>{
      return this.http.delete<Ordinateur>(this.apiURL + '/' + id).pipe(retry(1),catchError(this.handleError));
    }

     handleError(error) {
      let errorMessage = '';
      if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
      } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        window.alert(errorMessage);
      return throwError(errorMessage);
  }
    }

}
