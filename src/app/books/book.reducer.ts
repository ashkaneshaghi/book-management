import { createReducer, on } from "@ngrx/store";
import { Book } from "../models/book";
import {
    AddBook,
    RemoveBook,
    AddBookSuccess,
    AddBookFailure,
    RemoveBookSuccess,
    RemoveBookFailure
} from "./book.actions";

export const initialState: Book[] = [];

export const BookReducer = createReducer(
    initialState,
    on(AddBook, (state, { id, title, author }) => { return state }),
    on(AddBookSuccess, (state, { id, title, author }) => [...state, { id, title, author }]),
    on(AddBookFailure, (state, { error }) => {
        console.error('ERROR: ' + JSON.stringify(error));
        return state;
    }),
    on(RemoveBook, (state, { bookId }) => { return state }),
    on(RemoveBookSuccess, (state, { bookId }) => state.filter(book => book.id != bookId)),
    on(RemoveBookFailure, (state, { error }) => {
        console.error('ERROR IN REMOVE BOOK', JSON.stringify(error));
        return state;
    })
);