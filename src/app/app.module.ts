import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { UrlService } from './url.service';
import { LinkComponent } from './link/link.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LoaderComponent } from './loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatInputModule, MatRadioModule, MatButtonToggleModule } from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTypeaheadModule,
    MatAutocompleteModule,
    MatInputModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
  ],
  exports : [
    MatAutocompleteModule,
    MatInputModule,
    MatRadioModule,
    MatButtonToggleModule,
  ],
  providers: [HttpService, UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
