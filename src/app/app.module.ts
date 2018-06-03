import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { UrlService } from './url.service';
import { LinkComponent } from './link/link.component';
import { FormsModule } from '@angular/forms';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@NgModule({
  declarations: [
    AppComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxTypeaheadModule,
  ],
  providers: [HttpService, UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
