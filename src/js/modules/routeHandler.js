import getBooks from './getBooks.js';
import * as render from './render.js';

async function genreOverview(input) {
    try {
         // Local storage for prototyping, REMOVE LATER
        let books = []
        let storedData = JSON.parse(localStorage.getItem('books'));
        if (storedData) {
            console.log('no fetch')
            books = storedData;
        }
        else {
            console.log('fetching'); 
            books = await getBooks(input); 
            localStorage.setItem('books', JSON.stringify(await getBooks(input)))
        };
        //

        // Get books ADD LATER
        // const books = await getBooks(input);
        console.log('books: ', books)
        console.log(books);
        console.log('test')
        // Render books
        render.renderBooks(books);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Done?");
    }
}

export {
    genreOverview,
}