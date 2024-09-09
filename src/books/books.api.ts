export const booksUrl = 'https://www.googleapis.com/books/v1/volumes';
export const booksQueryParamName = 'q'

export interface BooksPageDto {
  // @TODO
}

const exampleResponse = {
    "totalItems": 550,
    "items": [
      {
        "id": "q67FvQEACAAJ",
        "volumeInfo": {
          "title": "Angular instalacja i dzialanie",
          "authors": [
            "Seshadri Shyam"
          ]
        }
      },
      {
        "id": "wJ8HkAEACAAJ",
        "volumeInfo": {
          "title": "AngularJS"
        }
      },
      {
        "id": "BHs2DwAAQBAJ",
        "volumeInfo": {
          "title": "Learning Angular",
          "authors": [
            "Brad Dayley",
            "Brendan Dayley",
            "Caleb Dayley"
          ]
        }
      },
    ]
  }