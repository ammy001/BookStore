import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Book } from '../_models/Book';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private baseUrl: string = environment.baseURL + 'api/';

    constructor(private http: HttpClient) { }

    public addBook(book: Book) {
        return this.http.post(this.baseUrl + 'books', book);
    }

    public updateBook(id: number, book: Book) {
        return this.http.put(this.baseUrl + 'books/' + id, book);
    }

    public getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.baseUrl + 'Books');
    }

    public getBookById(id): Observable<Book> {
        return this.http.get<Book>(this.baseUrl + 'books/' + id);
    }

    public deleteBook(id: number) {
        return this.http.delete(this.baseUrl + 'books/' + id);
    }

    public searchBooksWithCategory(searchedValue: string): Observable<Book[]> {
        return this.http.get<Book[]>(`${this.baseUrl}books/search-book-with-category/${searchedValue}`);
    }
}