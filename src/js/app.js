import search from './modules/utils.js'
import './vendor/routie.js'

routie({
  // Genre overview
  '': () => {
    document.querySelector("#search").addEventListener("click", search);
  }
  // Games overview
  //   ":genre": routeHandler.gamesOverview,
  // Game detail page
  //   "/:name": routeHandler.gameDetails
});

