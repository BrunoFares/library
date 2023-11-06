const openDialog = document.querySelector("div.header button");
const closeDialog = document.querySelector("button#close")
const dialog = document.querySelector("dialog");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookNumPages = document.querySelector("#numOfPages");
const bookStatus = document.querySelector("#status");
const newBook = document.querySelector("#confirmBtn");
const table = document.querySelector("table");

bookStatus.value = "Not read";

const myLibrary = [];

let Book = function(title, author, numPages, status) {
    this.title = bookTitle.value;
    this.author = bookAuthor.value;
    this.numPages = bookNumPages.value;
    this.status = bookStatus.value;
}
bookStatus.addEventListener('click', () => {
    if (bookStatus.checked === true) {
        bookStatus.value = "Read";
    } else {
        bookStatus.value = "Not read";
    }
});

function addBookToLibrary() {
    const book = new Book(bookTitle, bookAuthor, bookNumPages, bookStatus);
    myLibrary.push(book);
}

function addTableRow(book) {
    table.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.numPages}</td><td>${book.status}</td></tr>`;
}

openDialog.addEventListener("click", () => {
    dialog.showModal();
});

closeDialog.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
});

newBook.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
    addBookToLibrary();
    addTableRow(myLibrary[myLibrary.length-1]);

    bookTitle.value = "";
    bookAuthor.value = "";
    bookNumPages.value = "";
});