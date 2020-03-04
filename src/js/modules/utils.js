import * as overview from './routeHandler.js';

function search() {
    // Remove old data
    document.querySelector(".overview").innerHTML = "";
    // Get search value
    const input = document.querySelector("#search-input").value;
    // Give user feedback
    document.querySelector(".results-feedback").innerHTML = input;
    overview.genreOverview(input);
}

export {
    search,
}