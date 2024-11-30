import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Book } from '../models/book';
import { Store, select } from '@ngrx/store';
import {
    AddBook,
    RemoveBook,
    AddBookSuccess,
    RemoveBookSuccess
} from '../books/book.actions';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrl: './book-list.component.css'
})
export class BookListComponent {

    books$: Observable<Book[]>;

    constructor(
        private store: Store<AppState>
    ) {
        this.books$ = store.pipe(select('book'));
    }

    addBook(id: string, title: string, author: string) {
        this.store.dispatch(AddBook({ id, title, author }));
        //this.store.dispatch(AddBook({ id, title, author }));
    }

    removeBook(bookId: string) {
        this.store.dispatch(RemoveBook({ bookId }));
        //this.store.dispatch(RemoveBook({ bookId }));
    }
}