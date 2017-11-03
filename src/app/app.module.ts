import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DataLoaderService } from './data-loader.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    MatAutocompleteModule,
    FormsModule,
  ],
  providers: [DataLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
