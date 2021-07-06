import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';


@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http: HttpClient) { }

  fetchAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`http://localhost:8080/api/books`)
  }

  fetchBooksByName(name: String): Observable<Book[]>{
    return this.http.get<Book[]>(`http://localhost:8080/api/books/${name}`)
  }

  fetchBooksByCategoryId(categoryId: number): Observable<Book[]>{
    return this.http.get<Book[]>(`http://localhost:8080/api/books/category/${categoryId}`)
  }

  fetchBookById(id: number): Observable<Book>{
    return this.http.get<Book>(`http://localhost:8080/api/book/${id}`)
  }


  
}
