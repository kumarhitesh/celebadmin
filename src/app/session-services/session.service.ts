import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable()
export class SessionService {

  private currentPage = new BehaviorSubject({
    page: null
  });

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  apiUrl: any = 'https://celebritoneapi.herokuapp.com/session';
  constructor(private http: HttpClient) {

  }
  public apiCall(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((result) => {
        return result;
      })
      , catchError((error) => {
        return error;
      }),
      retry(3)
    );
  }

  public addSession(session: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, session, this.httpOption).pipe(
      map((result) => {
        return result;
      }), catchError((error) => {
        return error;
      }),
      retry(3)
    );
  }

  public deleteSession(sessionID: any): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/' + sessionID, this.httpOption).pipe(
      map((result) => {
        return result;
      }),
      catchError((error) => {
        return error;
      })
    );
  }

  public getSessionByID(sessionID: any): Observable<any> {
    return this.http.get(this.apiUrl + '/' + sessionID).pipe(
      map((result) => {
        return result;
      })
      , catchError((error) => {
        return error;
      }),
      retry(3)
    );
  }

  public updateSession(session: any, sessionId: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/' + sessionId, session, this.httpOption).pipe(
      map((result) => {
        return result;
      }),
      catchError((error) => {
        return error;
      })
    );
  }

  public setCurrentpage(value) {
    this.currentPage.next({
      page: value
    });
  }

  public getCurrentpage() {
    return this.currentPage.asObservable();
  }
}
