import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
//service
import { units } from '../interfaces/interfaceEmpires';


@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  unites: Array<Object>;
  private unitUrl = '/api/v1/units';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,

  ) { }

  getUnits() {
    const urlApi = "/api/v1/units";
    return this.http.get<any>(urlApi);
  }

  convertToArray(obj) {
    let myArr = [];
    if (obj == undefined || obj == null || obj == '') {
      return "[INFO]: El objeto es indefinido";
    } else {
      return myArr.push(obj);
    }
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

}
