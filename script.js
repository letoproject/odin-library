const openModalWindow = document.querySelector(".openModal");
const booksContainer = document.querySelector(".container");
const modalWindow = document.querySelector("#modalWindow");
const bookTitleInput = modalWindow.querySelector(".addBook-input_title");
const bookAuthorInput = modalWindow.querySelector(".addBook-input_author");
const bookPagesInput = modalWindow.querySelector(".addBook-input_pages");
const addNewBookBtn = modalWindow.querySelector("#addBtn");

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

const myLibrary = [];

function Book() {
  //constructor
}

function addBookToLibrary() {
  const newBook = {};
  newBook.title = bookTitleInput.value;
  newBook.author = bookAuthorInput.value;
  newBook.pages = bookPagesInput.value;

  myLibrary.push(newBook);
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
