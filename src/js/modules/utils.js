import { genreOverview } from './routeHandler.js';

export default function search() {
    // Remove old data
    document.querySelector("main").innerHTML = "";
    // Get search value
    const input = document.querySelector("#search-input").value;
    genreOverview(input);
}