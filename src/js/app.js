import * as utils from './modules/utils.js';
import * as get from './modules/getBooks.js';
import * as render from './modules/render.js';
import './vendor/routie.js';

routie({
    // Home
    '': () => {
        document.querySelector("#search").addEventListener("click", utils.search);
        utils.handleHomeState();
    },
    // Overview
    ':overview': () => {  
        console.log('overview');
        utils.handleOverviewState();
    },
    // Detail page / Presentation templates
    'book/:id': (id) => {
        fetchDetailBook(id);
        utils.handleDetailState();
    }
});

async function fetchDetailBook(id) {
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