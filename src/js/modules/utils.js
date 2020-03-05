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

function handleHomeState() {
  document
    .querySelector(".container__home")
    .setAttribute("style", "display: initial;");
  document
    .querySelector(".container__overview")
    .setAttribute("style", "display: none;");
  document
    .querySelector(".container__detail")
    .setAttribute("style", "display: none;");
  document.querySelector("html").setAttribute("style", "overflow-y: initial;");
}

function handleOverviewState() {
  document
    .querySelector(".container__home")
    .setAttribute("style", "display: none;");
  document
    .querySelector(".container__overview")
    .setAttribute("style", "display: initial;");
  document
    .querySelector(".container__detail")
    .setAttribute("style", "display: none;");
  document.querySelector("html").setAttribute("style", "overflow-y: hidden;");
}

function handleDetailState() {
  document
    .querySelector(".container__home")
    .setAttribute("style", "display: none;");
  document
    .querySelector(".container__overview")
    .setAttribute("style", "display: none;");
  document
    .querySelector(".container__detail")
    .setAttribute("style", "display: flex;");
  document.querySelector("html").setAttribute("style", "overflow-y: initial;");
}

document.querySelector(".fullscreen").addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("hide");
  document.querySelector(".options").classList.toggle("hide");
  document.querySelectorAll(".editable").forEach(span => {
    span.classList.toggle("transparant");
  });
});

document
  .querySelectorAll(".container__home .suggestion-wrapper button")
  .forEach(button => {
    button.addEventListener("click", () => {
      overview.genreOverview(button.value);
    });
  });

let edit = Boolean;
const iconContainter = document.querySelector(".fullscreen");
const icon = document.querySelector(".icon");
iconContainter.addEventListener("click", () => {
  if (edit) {
    icon.src = "./src/images/decrease.png";
    edit = false;
  } else {
    icon.src = "./src/images/increase.png";
    edit = true;
  }
});

export { search, handleHomeState, handleOverviewState, handleDetailState };
