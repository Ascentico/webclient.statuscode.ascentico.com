import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AppComponent} from './app.component';
import {StatusCodeService} from './service/statuscode.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [StatusCodeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
