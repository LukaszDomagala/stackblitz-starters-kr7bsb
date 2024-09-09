import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BookDetailsComponent, BookDetailsOptions } from './book-details/book-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, BookDetailsComponent],
  templateUrl: './books.component.html',
  styles: ''
})
export class BooksComponent {
  bookDetailsOptions: BookDetailsOptions = {
    displayAuthors: true,
  };


  toggleOptions(): void {
    this.bookDetailsOptions.displayAuthors = !this.bookDetailsOptions.displayAuthors;
  }
}
