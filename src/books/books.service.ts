import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BooksPage } from './books.interfaces';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  findBooks(query: string): Observable<BooksPage> {
    return of({
      totalItems: 421,
      items: [
        {
          "id": "q67FvQEACAAJ",
          "title": "Angular instalacja i dzialanie",
          "authors": "Seshadri Shyam"
        },
        {
          "id": "huPLEAAAQBAJ",
          "title": "Angular Projects",
          "authors": "Aristeidis Bampakos"
        },
        {
          "id": "wJ8HkAEACAAJ",
          "title": "AngularJS",
          "authors": "-"
        },
        {
          "id": "BHs2DwAAQBAJ",
          "title": "Learning Angular",
          "authors": "Brad Dayley, Brendan Dayley, Caleb Dayley"
        },
        {
          "id": "1JHWtAEACAAJ",
          "title": "Angular 6 for Enterprise-Ready Web Applications",
          "authors": "Doguhan Uluca"
        },
        {
          "id": "Znc5DwAAQBAJ",
          "title": "Essential Angular",
          "authors": "Victor Savkin, Jeff Cross"
        },
        {
          "id": "NpZGDwAAQBAJ",
          "title": "NativeScript for Angular Mobile Development",
          "authors": "Nathan Walker, Nathanael J. Anderson"
        },
        {
          "id": "zVMoDwAAQBAJ",
          "title": "Angular Services",
          "authors": "Sohail Salehi"
        },
        {
          "id": "FSRGEAAAQBAJ",
          "title": "Accelerating Angular Development with Ivy",
          "authors": "Lars Gyrup Brink Nielsen, Jacob Andresen, Santosh Yadav"
        },
        {
          "id": "qys8zgEACAAJ",
          "title": "Angular For Dummies",
          "authors": "Rufus Stewart"
        }
      ]
    });
  }
}
