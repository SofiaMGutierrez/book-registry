import { Component } from '@angular/core';
import { BookGalleryComponent } from './components/book-gallery/book-gallery';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookGalleryComponent],
  templateUrl: './app.html'
})
export class App {}