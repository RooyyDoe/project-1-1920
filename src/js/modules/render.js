// Render
function renderBooks(data) {
  const container = document.querySelector(".overview");
  let results = data;

  console.log("data", data);

  document.querySelector(".wrapper").classList.toggle("hide");
  document.querySelector("html").classList.toggle("overflow-y");
  document.querySelector(".content-wrapper").classList.toggle("hide");
  document.querySelector(".overview").classList.toggle("show");
  document.querySelector(".overview-header").classList.toggle("show");

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

function renderDetail(data) {

  console.log('filterd dataaa', data)
  document.querySelector(".overview").classList.toggle("show");
  document.querySelector(".detail-container").classList.toggle("show");
  document.querySelector(".overview-header").classList.toggle("show");

  const detailTemplate = document.getElementById("detailTemplate").textContent;
  const compiledTemplate = Handlebars.compile(detailTemplate);
  const bookDetailGeneratedHTML = compiledTemplate(data);

  const container = document.querySelector(".detail-container");
  container.insertAdjacentHTML("beforeend", bookDetailGeneratedHTML);
}

export {
  renderBooks,
  renderDetail
}