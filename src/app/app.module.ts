import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DataLoaderService } from './data-loader.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [DataLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
