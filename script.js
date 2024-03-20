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

  addBookToLibrary();
  createBookCard();
  modalWindow.close();
  clearInput();
});

function clearInput() {
  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookPagesInput.value = "";
  switchToggle.checked = false;
}

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  changeReadStatus = function (e) {
    this.read = !this.read;
    e.target.textContent = `${this.read ? "Read" : "Not read"}`;

    if (e.target.classList.contains("read")) {
      e.target.classList.remove("read");
      e.target.classList.add("not_read");
    } else {
      e.target.classList.add("read");
      e.target.classList.remove("not_read");
    }
  };
}

function addBookToLibrary() {
  title = bookTitleInput.value;
  author = bookAuthorInput.value;
  pages = bookPagesInput.value;
  read = switchToggle.checked;

  if (title === "" || author === "") {
    alert("Inputs can`t be empty");
    return;
  }

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function createBookCard() {
  booksContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    const index = myLibrary.map((b) => b.title).indexOf(book.title);
    card.setAttribute("data-id", `${index}`);

    title = book.title;
    author = book.author;
    pages = book.pages;
    read = book.read;

    const bookTitle = document.createElement("h2");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");

    bookTitle.textContent = title;
    bookAuthor.textContent = `by ${author}`;
    bookPages.textContent = `Pages: ${pages}`;

    const menuBtns = document.createElement("div");
    menuBtns.classList.add("book-card_menu");

    const menuBtnSwitch = document.createElement("button");
    menuBtnSwitch.textContent = `${read ? "Read" : "Not read"}`;
    menuBtnSwitch.classList.add("book-card_btn");
    menuBtnSwitch.setAttribute("data-btn", "btnSwitch");
    menuBtnSwitch.classList.add(`${read ? "read" : "not_read"}`);
    menuBtnSwitch.addEventListener("click", (e) => book.changeReadStatus(e));

    const menuBtnDel = document.createElement("button");
    menuBtnDel.classList.add("book-card_btn");
    menuBtnDel.setAttribute("data-btn", "btnDel");
    menuBtnDel.textContent = "Delete";
    menuBtnDel.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      createBookCard();
    });

    menuBtns.appendChild(menuBtnSwitch);
    menuBtns.appendChild(menuBtnDel);

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(menuBtns);

    booksContainer.appendChild(card);
  });
}

const currentYearSpan = document.querySelector(".current_year");
currentYearSpan.textContent = new Date().getFullYear();
