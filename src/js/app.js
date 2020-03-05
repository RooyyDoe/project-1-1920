import * as utils from './modules/utils.js';
import * as routeHandler from './modules/routeHandler.js'
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
        routeHandler.fetchDetailBook(id);
        utils.handleDetailState();
    }
});