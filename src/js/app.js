import search from './modules/utils.js'
import './vendor/routie.js'

routie({
    // Search field + genres
    '': () => {
        document.querySelector("#search").addEventListener("click", search);
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
    }
});