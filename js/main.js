const myLibrary = [];

//-------constructor----------------

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

const addBookBtn = document.querySelector("#addBookBtn");
const dialog = document.querySelector("#bookDialog");

//opens dialog on btn click
addBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

//closes dialog when clicking outside of it neat trick
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    dialog.close();
    searchQuery.value = "";
    searchResults.innerHTML = "";
  }
});

// const addBook = (ev) => {
//   ev.preventDefault();
//   let Book = {
//     id: crypto.randomUUID(),
//     title: document.getElementById("title").value,
//     author: document.getElementById("author").value,
//     pages: document.getElementById("pages").value,
//     read: document.getElementById("read").value,
//   };

//   myLibrary.push(Book);
//   document.querySelector("form").reset();

//   console.warn("added", { myLibrary });
//   let pre = document.querySelector("#msg pre");
//   pre.textContent = "\n" + JSON.stringify(myLibrary, "\t", 2);
// };

// function addBookToLibrary(title, author, numPages) {
//   const id = crypto.randomUUID();
//   const book = new Book(title, author, numPages, id);
//   myLibrary.push(book);
//   return book;
// }

//-------------------------------------

// const libraryDiv = document.querySelector("#library");

// function displayLibrary() {
//   libraryDiv.innerHTML = "";

//   myLibrary.forEach((book) => {
//     const p = document.createElement("p");
//     p.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
//     libraryDiv.appendChild(p);
//   });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("btn").addEventListener("click", addBook);
// });

// addBookToLibrary("The Hobbit", "Tolkein", 195);
// addBookToLibrary("Caca Book", "Luis Orta", 5);
// addBookToLibrary("The Smelly One", "Ricardo Lay", 200000);
