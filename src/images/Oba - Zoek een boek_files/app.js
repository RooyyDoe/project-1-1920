import search from './modules/utils.js'
import './vendor/routie.js'

routie({
  // Search field + genres
  '': () => {
    document.querySelector("#search").addEventListener("click", search);
  }
  // Books overview
});