import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor() { }

    addBook(book: Book): Observable<Book> {
        // interactions with backend code
        return of(book);
    }

    removeBook(bookId: string): Observable<string> {
        console.log('THIS IS BOOK ID: ', bookId);
        // interactions with backend code StatusCode = 204 (Deleted)
        return of(bookId);
    }
}
