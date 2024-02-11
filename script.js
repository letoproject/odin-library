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

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.changeReadStatus = function () {
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

function createBookCard() {
  booksContainer.innerHTML = "";
  console.log(myLibrary);

  myLibrary.forEach((book) => {
    console.dir("book", book);
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
    const menuBtnSwitch = document.createElement("button");
    const menuBtnDel = document.createElement("button");
    menuBtnSwitch.textContent = `${read ? "Read" : "Not read"}`;
    menuBtnDel.textContent = "Delete";
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
