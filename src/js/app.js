import * as utils from './modules/utils.js';
import * as get from './modules/getBooks.js';
import * as render from './modules/render.js';
import './vendor/routie.js';

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
     // Local storage for prototyping, REMOVE LATER
     let books = []
     let storedData = JSON.parse(localStorage.getItem('book'));
     if (storedData) {
         console.log('no fetch')
         books = storedData;
     }
     else {
         console.log('fetching'); 
         books = await get.getBookDetail(id); 
         localStorage.setItem('book', JSON.stringify(await get.getBookDetail(id)))
     };

    // ADD LATER
    // const books = await get.getBookDetail(id); 

    render.renderDetail(books);
}