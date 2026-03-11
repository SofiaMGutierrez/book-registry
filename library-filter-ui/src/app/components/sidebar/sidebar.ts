import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {

  // sends selected genre to parent component
  @Output() genreSelected = new EventEmitter<string>();

  // sends selected author to parent component
  @Output() authorSelected = new EventEmitter<string>();

  selectGenre(genre:string){
    this.genreSelected.emit(genre);
  }

  selectAuthor(author:string){
    this.authorSelected.emit(author);
  }

}