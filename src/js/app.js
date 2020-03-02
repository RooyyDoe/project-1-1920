import getBooks from './modules/getBooks.js'
import renderBooks from './modules/render.js'

document.querySelector('#search').addEventListener('click', search);

async function search() {
    // Remove old data
    document.querySelector('main').innerHTML = '';
    // Get search value
    const input = document.querySelector('#search-input').value;
    // Get books
    const books = await getBooks(input);
    // Render books
    renderBooks(books);
}