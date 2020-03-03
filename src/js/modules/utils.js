document.querySelector("#search").addEventListener("click", search);

function search() {
  // Remove old data
  document.querySelector("main").innerHTML = "";
  // Get search value
  const input = document.querySelector("#search-input").value;
}
