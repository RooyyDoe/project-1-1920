// Render
function renderBooks(data) {
  const container = document.querySelector(".overview");
  let results = data;

  console.log("data", data);

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
  console.log('selected book', data)

  const detailTemplate = document.getElementById("detailTemplate").textContent;
  const compiledTemplate = Handlebars.compile(detailTemplate);
  const bookDetailGeneratedHTML = compiledTemplate(data);

  const container = document.querySelector(".container__detail");
  container.insertAdjacentHTML("beforeend", bookDetailGeneratedHTML);
}

function renderAuthorBooks(data) {
  console.log('author books', data)
  
  const authorTemplate = document.getElementById("authorTemplate").textContent;
  const compiledTemplate = Handlebars.compile(authorTemplate);
  const authorGeneratedHTML = compiledTemplate(data);

  const container = document.querySelector(".author-detail-books");
  container.insertAdjacentHTML("beforeend", authorGeneratedHTML);
}

export {
  renderBooks,
  renderDetail,
  renderAuthorBooks,
}