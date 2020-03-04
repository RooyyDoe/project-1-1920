import * as utils from './modules/utils.js';
import getBooks from './modules/getBooks.js';
import * as render from './modules/render.js';
import './vendor/routie.js';
import { renderBooks } from './modules/render.js';

routie({
    // Search field + genres
    '': () => {
        document.querySelector("#search").addEventListener("click", utils.search);
    },
    ':overview': () => {  
        console.log('overview');},
    // Books favourite
    '/:favorieten': () => {
        console.log('favorieten');
        document.querySelector(".wrapper").classList.toggle("hide");
        document.querySelector(".content-wrapper").classList.toggle("hide");
        document.querySelector(".my-favourites").classList.toggle("hide");
        document.querySelector(".favourites").classList.toggle("show");
    },
    'book/:id': (id) => {
        filterClickedItem(id);

    }
});

async function filterClickedItem(id) {
    // Get search value
    const input = document.querySelector("#search-input").value;
    const books = await getBooks(input); 

    const filteredObject = books.filter(utils.filterClickedBook(id));

    console.log('filtered:', filteredObject);

    render.renderDetail(filteredObject);
}