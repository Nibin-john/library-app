import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBookComponent,
    AddBookComponent,
    ViewBookComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
