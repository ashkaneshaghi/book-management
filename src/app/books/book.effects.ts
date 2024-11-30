import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as bookActions from "./book.actions";
import { BookService } from "./book.service";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()

export class BookEffects {

    // This is an NgRx Effect that responds to 'AddBook' actions.
    addBook$ = createEffect(() => this.actions$.pipe(
        // Listen for actions of type 'AddBook'
        ofType(bookActions.AddBook),
        // For each 'AddBook' action, call 'addBook' on the book service.
        // 'mergeMap' allows multiple concurrent 'addBook' calls.
        mergeMap((action) => this.bookService.addBook(action)
            .pipe(
                // If the 'addBook' call is successful, dispatch 'AddBookSuccess' action with the book data.
                map(book => bookActions.AddBookSuccess(book)),
                // If the 'addBook' call fails, dispatch 'AddBookFailure' action with the error.
                catchError((error) => of(bookActions.AddBookFailure({ error })))
            )
        )
    ));

    // This is an NgRx Effect that responds to 'RemoveBook' actions.
    removeBook$ = createEffect(() => this.actions$.pipe(
        // Listen for actions of type 'RemoveBook'
        ofType(bookActions.RemoveBook),
        // For each 'RemoveBook' action, call 'removeBook' on the book service.
        // 'mergeMap' allows multiple concurrent 'removeBook' calls.
        mergeMap((action) => this.bookService.removeBook(action.bookId)
            .pipe(
                // if the 'removeBook' call is successful, dispatch 'RemoveBookSuccess' action with the book Id
                map(bookId => bookActions.RemoveBookSuccess({ bookId })),
                // if the 'removeBook' call is failed, dispatch 'RemoveBookFailure' action with the error
                catchError((error) => of(bookActions.RemoveBookFailure({ error })))
            )
        )
    ))

    constructor(
        private bookService: BookService,
        private actions$: Actions
    ) { }
}