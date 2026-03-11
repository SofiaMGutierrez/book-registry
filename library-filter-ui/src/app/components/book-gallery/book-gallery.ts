import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar';
import { BookListComponent } from '../book-list/book-list';

@Component({
  selector: 'app-book-gallery',
  standalone: true,
  imports: [CommonModule, SidebarComponent, BookListComponent],
  templateUrl: './book-gallery.html'
})
export class BookGalleryComponent implements OnInit {

  books:any[] = [];
  author:string = "";
  genre:string = "";

  constructor(private bookService:BookService){}

  ngOnInit(){
    this.loadBooks();
  }

  loadBooks(){
    this.bookService.getBooks(this.author,this.genre)
      .subscribe(data => this.books = data);
  }

  setGenre(g:string){
    this.genre = g;
    this.loadBooks();
  }

  toggleAuthor(a:string){

    if(this.author === a)
      this.author = "";
    else
      this.author = a;

    this.loadBooks();
  }

}