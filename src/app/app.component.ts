import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStatusCode} from './model/statuscode.model';
import {StatusCodeService} from './service/statuscode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'HTTP Status Code Web Client';
  statusCodeResponse: IStatusCode;
  statusCodesResponse: IStatusCode[];

  constructor(private http: HttpClient, private statusCodeService: StatusCodeService) {
  }

  changeStatusCode(value: any): void {
    this.statusCodeService.getStatusCode(value).subscribe(Response => {
      this.statusCodeResponse = Response;
    });
  }

  populateStatusCodeDropDown(): void {
    this.statusCodeService.getStatusCodes().subscribe(Response => {
      this.statusCodesResponse = Response as IStatusCode[];
    });
  }

  ngOnInit(): void {
    this.changeStatusCode(100);
    this.populateStatusCodeDropDown();
  }
}
