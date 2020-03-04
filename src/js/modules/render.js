// Render
export default function renderBooks(data) {
  const container = document.querySelector(".overview");
  let results = data;

  console.log("data", data);

  document.querySelector(".wrapper").classList.toggle("hide");
  document.querySelector(".content-wrapper").classList.toggle("hide");
  document.querySelector(".overview").classList.toggle("show");

  if (results.length !== 0) {
    const overviewTemplate = document.getElementById("overviewTemplate")
      .textContent;
    const compiledTemplate = Handlebars.compile(overviewTemplate);
    const bookOverviewGeneratedHTML = compiledTemplate(data);

    const container = document.querySelector(".overview");
    container.insertAdjacentHTML("afterbegin", bookOverviewGeneratedHTML);
  } else {
    container.insertAdjacentHTML("beforeend", "Geen boeken gevonden!");
  }
}
