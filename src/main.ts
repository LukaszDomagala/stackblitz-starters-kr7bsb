import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
    <app-home></app-home>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
