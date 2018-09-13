import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStatusCode } from './statuscode.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'HTTP Status Code Web Client';
  statusCodeResponse: IStatusCode;
  statusCodesResponse: IStatusCode[];

  constructor(private http: HttpClient) {
  }

  changeStatusCode(value: any): void {
    this.http.get<IStatusCode>('http://localhost:8080/api/v1/status/' + value).subscribe(Response => {
    this.statusCodeResponse = Response;
    console.log(Response);
  });
  }

  ngOnInit(): void {
    this.http.get<IStatusCode>('http://localhost:8080/api/v1/status/100').subscribe(Response => {
      this.statusCodeResponse = Response;
      console.log(Response);
    });
    this.http.get('http://localhost:8080/api/v1/status').subscribe(Response => {
      this.statusCodesResponse = Response as IStatusCode[];
      console.log(Response);
    });
  }
}
