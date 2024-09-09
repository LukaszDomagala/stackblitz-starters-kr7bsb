import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Book } from '../books.interfaces';
import { CommonModule } from '@angular/common';


export interface BookDetailsOptions {
  displayAuthors: boolean,
}

@Component({
  selector: 'app-book-details',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styles: ''
})
export class BookDetailsComponent {
  book = input<Book>();
  options = input<BookDetailsOptions>();
}
