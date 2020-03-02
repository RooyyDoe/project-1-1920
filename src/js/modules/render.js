// Render
export default function renderBooks(data) {
    const main = document.querySelector('main');
    const results = data.results;
    console.log(data);
    console.log('data', results);
    
    if (results.length !== 0) {
        // Render new data
        results.forEach((item) => {
            const html = `
                    <article>
                    <h2>${item.titles[0]}</h2>
                    <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                    <img src="${
                        item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
                    }">
                    </article>
                `;
            main.insertAdjacentHTML('beforeend', html);
        });
    }
    else {
        main.insertAdjacentHTML('beforeend', 'Geen boeken gevonden!');
    }
}