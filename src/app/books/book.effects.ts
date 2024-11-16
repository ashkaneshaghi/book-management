import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as bookActions from "./book.actions";
import { BookService } from "./book.service";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()

export class BookEffects {

    constructor(
        private bookService: BookService,
        private actions$: Actions
    ) { }

    addBook$ = createEffect(
        () => this.actions$.pipe(
            ofType(bookActions.AddBook),
            mergeMap(
                (data) =>
                    this.bookService.addBook(data)
                        .pipe(
                            map(
                                book => bookActions.AddBookSuccess(book)
                            ),
                            catchError(
                                error => of(bookActions.AddBookFailure(error))
                            )
                        )
            )
        )
    );

}