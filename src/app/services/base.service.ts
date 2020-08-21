import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseService {

constructor(private httpClient: HttpClient,
) { }

  get<T>(requestUrl: string, httpParams: any = {}): Observable<any> {
    return this.httpClient
        .get<T>(requestUrl, { params: httpParams });
  }

  post<T>(requestUrl: string, bodyRequest: any): Observable<any> {
    return this.httpClient
    .post<T>(requestUrl, bodyRequest);
  }

  delete<T>(requestUrl: string): Observable<any> {
    return this.httpClient
    .delete<T>(requestUrl);
  }



}
// http://localhost:3000

