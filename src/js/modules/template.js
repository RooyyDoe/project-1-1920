document.querySelectorAll(".radio-buttons-background label").forEach(label => {
    label.addEventListener("click", () => {
        const color = label.getAttribute('for');
        document.querySelector('.template').setAttribute('style', `background-color: ${color}`)
    });
});

document.querySelectorAll(".radio-buttons-font label").forEach(label => {
    label.addEventListener("click", () => {
        const font = label.getAttribute('for');
        document.querySelector('.template').setAttribute('style', `font-family: ${font}`)
        console.log(label)
    });
});