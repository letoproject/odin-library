const openModalWindow = document.querySelector(".openModal");
const booksContainer = document.querySelector(".container");
const modalWindow = document.querySelector("#modalWindow");
const bookTitleInput = modalWindow.querySelector(".addBook-input_title");
const bookAuthorInput = modalWindow.querySelector(".addBook-input_author");
const bookPagesInput = modalWindow.querySelector(".addBook-input_pages");
const addNewBookBtn = modalWindow.querySelector("#addBtn");
const switchToggle = modalWindow.querySelector(".chxBox");

const myLibrary = [];

openModalWindow.addEventListener("click", () => {
  modalWindow.showModal();
});

addNewBookBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let title = null;
  let author = null;
  let pages = null;

  addBookToLibrary();
  myLibrary.forEach((book) => {
    title = book.title;
    author = book.author;
    pages = book.pages;
  });

  addBookCard(title, author, pages);
  modalWindow.close();
  clearInput();
});

function clearInput() {
  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookPagesInput.value = "";
}

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}

function addBookToLibrary() {
  title = bookTitleInput.value;
  author = bookAuthorInput.value;
  pages = bookPagesInput.value;

  const newBook = new Book(title, author, pages);
  newBook.read = switchToggle.addEventListener("click", (e) => readToggle(e));
  myLibrary.push(newBook);
}

function readToggle(e) {
  return e.target.checked ? true : false;
}

function addBookCard(title, author, pages) {
  const card = document.createElement("div");
  card.classList.add("book-card");

  const bookTitle = document.createElement("p");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");

  bookTitle.textContent = title;
  bookAuthor.textContent = author;
  bookPages.textContent = pages;

  card.appendChild(bookTitle);
  card.appendChild(bookAuthor);
  card.appendChild(bookPages);
  booksContainer.appendChild(card);
}

console.log(myLibrary);
