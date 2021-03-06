document.querySelectorAll(".radio-buttons-background label").forEach(label => {
  label.addEventListener("click", () => {
    const color = label.getAttribute("for");
    document
      .querySelector(".template")
      .setAttribute("style", `background-color: ${color}`);
  });
});

document.querySelectorAll(".radio-buttons-font label").forEach(label => {
  label.addEventListener("click", () => {
    const font = label.getAttribute("for");
    document
      .querySelector("#section1 > div")
      .setAttribute("style", `font-family: ${font}`);
    document
      .querySelector("#section2 div")
      .setAttribute("style", `font-family: ${font}`);
    document
      .querySelector("#section3 div")
      .setAttribute("style", `font-family: ${font}`);
    document
      .querySelector("#section4 div")
      .setAttribute("style", `font-family: ${font}`);
  });
});

document.querySelectorAll(".radio-buttons-text-color label").forEach(label => {
  label.addEventListener("click", () => {
    const color = label.getAttribute("for");
    document
      .querySelector("#section1")
      .setAttribute("style", `color: ${color}`);
    document
      .querySelector("#section2")
      .setAttribute("style", `color: ${color}`);
    document
      .querySelector("#section3")
      .setAttribute("style", `color: ${color}`);
    document
      .querySelector("#section4")
      .setAttribute("style", `color: ${color}`);
  });
});
