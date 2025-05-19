import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BookDetailsComponent, BookDetailsOptions } from './book-details/book-details.component';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormsModule, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { Book } from './books.interfaces';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [CommonModule, BookDetailsComponent, FormsModule],
  templateUrl: './books.component.html',
  styles: ''
})
export class BooksComponent {
  bookDetailsOptions: BookDetailsOptions = {
    displayAuthors: true,
  };

  query = ''

  books = inject(BooksService).findBooks('z');


  toggleOptions(): void {
    this.bookDetailsOptions = {displayAuthors: !this.bookDetailsOptions.displayAuthors}
  }

  onSubmit($event: unknown) {
    console.log(this.query);
    this.query = '';
  }

  customValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    // Example: Check if the value contains the word 'angular'
    if (value && !value.includes('angular')) {
        return { customError: 'Value must contain "angular"' };
    }
    return null;
}
}
