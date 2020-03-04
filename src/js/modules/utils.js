import * as overview from "./routeHandler.js";

function search() {
  // Remove old data
  document.querySelector(".overview").innerHTML = "";
  // Get search value
  const input = document.querySelector("#search-input").value;
  // Give user feedback
  document.querySelector(".results-feedback").innerHTML = input;
  overview.genreOverview(input);
}

document.querySelector(".fullscreen").addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("hide");
  document.querySelector(".radio-buttons").classList.toggle("hide");
});

document.querySelectorAll(".suggestion-wrapper button").forEach(button => {
  button.addEventListener("click", () => {
    overview.genreOverview(button.value);
  });
});

export { search };
