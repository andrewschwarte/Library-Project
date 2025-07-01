const myLibrary = [];
let nextId = 0;

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
const bookForm = document.querySelector("#bookForm");
const addBtn = document.querySelector("#add-btn");
const libraryContainer = document.querySelector(".library-container");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault(); // keep page from reloading

  /* 1. PULL VALUES OUT OF THE FORM ------------------------------ */
  const title = bookForm.title.value.trim();
  const author = bookForm.author.value.trim();
  const pages = parseInt(bookForm.pages.value, 10);
  const read = bookForm.read.checked;

  /* 2. BUILD A BOOK OBJECT & STORE IT --------------------------- */
  const book = new Book(title, author, pages, read, nextId++);
  myLibrary.push(book);

  /* 3. RERENDER THE GRID --------------------------------------- */
  renderLibrary();

  /* 4. RESET & CLOSE ------------------------------------------- */
  bookForm.reset();
  dialog.close();
});

//opens dialog on btn click
addBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

//adds books to screen
// addBtn.addEventListener("click", () => {
//   let newBook = document.createElement("div");
//   newBook.classList.add("book-card");
//   libraryContainer.appendChild(newBook);

//   newBook.textContent = "";
// });

libraryContainer.addEventListener("click", (e) => {
  if (!e.target.matches(".remove-btn")) return; // ignore other clicks

  const card = e.target.closest(".book-card");
  const id = +card.dataset.id; // + converts to number
  const index = myLibrary.findIndex((b) => b.id === id);

  if (index !== -1) myLibrary.splice(index, 1); // remove from the array
  renderLibrary(); // redraw without the book
});

function renderLibrary() {
  libraryContainer.innerHTML = ""; // clear old cards

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.dataset.id = book.id; // handy for later actions

    card.innerHTML = `
        <h3>${book.title}</h3>
        <p><em>${book.author}</em></p>
        <p>${book.pages} pages</p>
        <p class="read">${book.read ? "✅ Read" : "📖 Not read yet"}</p>
      

    <button class="remove-btn" aria-label="Remove book">
      🗑 Remove
    </button>`;

    libraryContainer.appendChild(card);
  });
}

//closes dialog when clicking outside of it neat trick
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    dialog.close();
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
