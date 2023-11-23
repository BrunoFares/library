const openDialog = document.querySelector("div.header button");
const closeDialog = document.querySelector("button#close")
const dialog = document.querySelector("dialog");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookNumPages = document.querySelector("#numOfPages");
const bookStatus = document.querySelector("#status");
const newBook = document.querySelector("#confirmBtn");
const table = document.querySelector("table");

const tableHeader = document.createElement("tr");
tableHeader.innerHTML = "<tr><th>Title</th><th>Author</th><th>Number of pages</th><th>Status</th><th></th></tr>";

bookStatus.value = "Not read";

const myLibrary = [];
const rows = [];
const images = [];

let variableName1;
let variableName2;
const tableRowButton = [];
const tableRow = [];

let Book = function(title, author, numPages, status) {
    this.title = bookTitle.value;
    this.author = bookAuthor.value;
    this.numPages = bookNumPages.value;
    this.status = bookStatus.value;
}

function addBookToLibrary() {
    const book = new Book(bookTitle, bookAuthor, bookNumPages, bookStatus);
    myLibrary.push(book);
}

bookStatus.addEventListener('click', () => {
    if (bookStatus.checked === true) {
        bookStatus.value = "Read";
    } else {
        bookStatus.value = "Not read";
    }
});

openDialog.addEventListener("click", () => {
    dialog.showModal();
});

closeDialog.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
});

let index = 0;
newBook.addEventListener("click", (event) => {
    index++;
    event.preventDefault();
    dialog.close();
    addBookToLibrary();

    if (myLibrary.length === 1) {
        table.appendChild(tableHeader);
    }

    var row = document.createElement('tr');
    table.appendChild(row);
    row.innerHTML = `<tr class='row${myLibrary.length}'><td>${myLibrary[myLibrary.length - 1].title}</td><td>${myLibrary[myLibrary.length - 1].author}</td><td>${myLibrary[myLibrary.length - 1].numPages}</td><td>${myLibrary[myLibrary.length - 1].status}</td></tr>`;

    var imageData = document.createElement('td');
    var image = document.createElement('img');
    image.src = "redcross.png";

    row.appendChild(imageData);
    imageData.appendChild(image);

    rows.push(row);
    images.push(image);

    bookTitle.value = "";
    bookAuthor.value = "";
    bookNumPages.value = "";
    bookStatus.checked = false;
    bookStatus.value = "Not read";
});