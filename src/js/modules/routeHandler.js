import * as get from './getBooks.js';
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
            books = await get.getBooks(input); 
            localStorage.setItem('books', JSON.stringify(await get.getBooks(input)))
        };
        //

        // Get books ADD LATER
        // const books = await get.getBooks(input);
        console.log('books: ', books)
        console.log(books);
        console.log('test')
        // Give user feedback
        document.querySelector(".results-feedback").innerHTML = input;
        // Render books
        render.renderBooks(books);
        document.querySelector('.loader1').setAttribute('style', 'display: none')
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Done?");
    }
}

async function fetchDetailBook(id) {
    // BOOK
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
    console.log('boekdetail,', books)

    // AUTHOR
    let author = [];

    // LOCAL STORAGE FOR PROTOTYPING, REMOVE LATER
    let storedAuthors = JSON.parse(localStorage.getItem('authorbooks'));
    if (storedAuthors) {
        console.log('no fetch')
        author = storedAuthors;
    }
    else {
        if(books[0].authors != undefined) {
            author = books[0].authors[0]
        }
        else {
            author = "";
        }
        console.log('auteur', author)
        author = await get.getBooks(author);
        localStorage.setItem('authorbooks', JSON.stringify(await get.getBooks(author)));
    }; 

    // ADD LATER
    // if(books[0].authors != undefined) {
    //     author = books[0].authors[0]
    // }
    // else {
    //     author = "";
    // }
    // console.log('auteur', author)
    // author = await get.getBooks(author);

    render.renderDetail(books);
    render.renderAuthorBooks(author);
    document.querySelector('.loader2').setAttribute('style', 'display: none')
}

export {
    genreOverview,
    fetchDetailBook,
}