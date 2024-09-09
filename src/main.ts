import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule, provideRouter } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { NotificationsComponent } from './notifications/notifications.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="flex gap-5">
      <a routerLink="books" routerLinkActive="font-bold">Books</a>
      <a routerLink="notifications" routerLinkActive="font-bold">Notifications</a>
    </div>
    <hr>
    <router-outlet/>
  `,
})
export class App { }

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'books', pathMatch: 'full' },
      { path: 'books', component: BooksComponent },
      { path: 'notifications', component: NotificationsComponent },
    ]),
    provideHttpClient(),
  ],
});
