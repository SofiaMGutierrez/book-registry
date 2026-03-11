import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  API = "http://localhost:8080/books";

  constructor(private http: HttpClient) {}

  getBooks(author?: string, genre?: string) {

    let url = this.API;

    if (author && genre)
      url += `?genre=${genre}&author=${author}`;
    else if (author)
      url += `?author=${author}`;
    else if (genre)
      url += `?genre=${genre}`;

    return this.http.get<any[]>(url);
  }

  createBook(book:any){
    return this.http.post(this.API, book);
  }

}