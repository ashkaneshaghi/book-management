import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

// NGRX SETUP
import { AppState } from './app.state';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from './books/book.reducer';

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot<AppState>({ book: BookReducer })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
