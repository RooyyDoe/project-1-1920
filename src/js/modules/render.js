// Render
export default function renderBooks(data) {
  const container = document.querySelector(".overview");
  let results = data;

  console.log("data", data);

  document.querySelector(".wrapper").classList.toggle("hide");
  document.querySelector(".content-wrapper").classList.toggle("hide");
  document.querySelector(".overview").classList.toggle("show");

  if (results.length !== 0) {
    // Render new data
    results.forEach(item => {
      const html = `
                    <article>
                    <h2>${item.titles[0]}</h2>
                    <p>${
                      item.summaries ? item.summaries[0] : "Geen samenvatting"
                    }</p>
                    <img src="${
                      item.coverimages
                        ? item.coverimages[1]
                        : "Geen samenvatting"
                    }">
                    </article>
                `;
      container.insertAdjacentHTML("beforeend", html);
    });
  } else {
    container.insertAdjacentHTML("beforeend", "Geen boeken gevonden!");
  }
}
