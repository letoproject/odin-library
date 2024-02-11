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
  booksContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    const index = myLibrary.map((card) => card.title).indexOf(book.title);
    title = book.title;
    author = book.author;
    pages = book.pages;
    read = book.read;
    createBookCard(title, author, pages, read, index);
  });

  modalWindow.close();
  clearInput();
});

function clearInput() {
  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookPagesInput.value = "";
  switchToggle.checked = false;
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.changeReadStatus = function (read) {
  this.read = !this.read;
};

function addBookToLibrary() {
  title = bookTitleInput.value;
  author = bookAuthorInput.value;
  pages = bookPagesInput.value;
  read = switchToggle.checked;

  // if (title === "" || author === "" || pages === "") {
  //   alert("Inputs can`t be empty");
  //   return;
  // }

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function createBookCard(title, author, pages, read, index) {
  const card = document.createElement("div");
  card.setAttribute("data-id", `${index}`);
  card.classList.add("book-card");

  const bookTitle = document.createElement("p");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  const haveRead = document.createElement("p");

  bookTitle.textContent = title;
  bookAuthor.textContent = author;
  bookPages.textContent = pages;
  haveRead.textContent = read;

  read ? (haveRead.style.color = "green") : (haveRead.style.color = "red");

  card.appendChild(bookTitle);
  card.appendChild(bookAuthor);
  card.appendChild(bookPages);
  card.appendChild(haveRead);
  booksContainer.appendChild(card);
}

const currentYearSpan = document.querySelector(".current_year");
currentYearSpan.textContent = new Date().getFullYear();
