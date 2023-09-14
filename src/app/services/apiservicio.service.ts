import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from
'@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiservicioService {

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    })
  }
  
  apiURL = 'https://my-json-server.typicode.com/victorrosendo/repoUsuariosRamos';

  apiURL1 = 'https://my-json-server.typicode.com/victorrosendo/repoSeccionAsigSeccion';

  constructor(private http:HttpClient) { }

  getRamos(): Observable<any> {
    return this.http.get(this.apiURL + '/ramos/').pipe(
      retry(3)
    );
  }
  
  getSeccion(id): Observable<any> {
    return this.http.get(this.apiURL + '/seccion/'+id).pipe(
      retry(3)
    );
  }
  getUsuarios(): Observable<any> {
    return this.http.get(this.apiURL + '/users/').pipe(
      retry(3)
    );
  }
}


