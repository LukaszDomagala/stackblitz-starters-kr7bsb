export interface Book {
    id: string;
    title: string;
    authors: string;
}

export interface BooksPage {
    totalItems: number;
    items: Book[];
}