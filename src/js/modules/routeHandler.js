import getBooks from './getBooks.js';
import renderBooks from './render.js';

export async function genreOverview(input) {
    try {
        // Get books
        const books = await getBooks(input);
        console.log('books: ', books)
        console.log(books);
        console.log('test')
        // Render books
        renderBooks(books);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Done?");
    }
}