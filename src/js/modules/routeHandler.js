import * as utils from "./utils.js";
import * as getBooks from "./modules/getBooks.js";
import * as renderBooks from "./modules/render.js";

export async function genreOverview() {
  try {
    // Get books
    const books = await getBooks(input);
    console.log(books);
    // Render books
    renderBooks(books);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Done?");
  }
}
