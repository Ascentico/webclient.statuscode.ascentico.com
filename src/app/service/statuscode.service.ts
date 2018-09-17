import {Injectable} from '@angular/core';
import {IStatusCode} from '../model/statuscode.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable()
export class StatusCodeService {

  constructor(private http: HttpClient) {
  }

  getStatusCode(value: any): Observable<IStatusCode> {
    return this.http.get<IStatusCode>(`https://api.statuscode.ascentico.com/api/v1/status/${value}`);
  }

  getStatusCodes(): Observable<IStatusCode[]> {
  return this.http.get<IStatusCode[]>(`https://api.statuscode.ascentico.com/api/v1/status`);
  }

}
