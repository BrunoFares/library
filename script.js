const openDialog = document.querySelector("div.header button");
const closeDialog = document.querySelector("button#close")
const dialog = document.querySelector("dialog");
const newBook = document.querySelector("#confirmBtn");

const bookTitleDialog = document.querySelector('#title');
const bookAuthorDialog = document.querySelector('#author');
const bookPagesDialog = document.querySelector('#numOfPages');
const bookStatusDialog = document.querySelector('#status');

openDialog.addEventListener("click", () => {
    dialog.showModal();
});

closeDialog.addEventListener("click", event => {
    event.preventDefault();
    dialog.close();
});

newBook.addEventListener("click", event => {
    event.preventDefault();

    const currentBook = new Book();
    list.add(currentBook);
    resetDialog();
    
    dialog.close();
});

const table = document.querySelector('table');

class Book {
    constructor() {
        this.title = bookTitleDialog.value;
        this.author = bookAuthorDialog.value;
        this.pages = bookPagesDialog.value;
        this.read = bookStatusDialog.checked;
    }

    toggleRead(list) {
        this.read = this.read ? false : true;
        list.update();
    }
}

class ListBinding {
    constructor(element) {
        this.listElement = element;
        this.myLibrary = [];
    }

    static createListItem(book, counter, list) {
        const tr = document.createElement('tr');
        for (let i = 0; i < 5; i++) {
            const td = document.createElement('td');
            switch(i) {
                case 0:
                    td.textContent = book.title;
                    break;
                case 1:
                    td.textContent = book.author;
                    break;
                case 2:
                    td.textContent = book.pages;
                    break;
                case 3:
                    td.textContent = book.read ? "Yes" : "No";
                    td.addEventListener('click', () => {book.toggleRead(list)});
                    break;
                case 4:
                    const img = document.createElement('img');
                    img.src = 'redcross.png';
                    td.appendChild(img);
                    td.addEventListener('click', () => {list.remove(counter)});
                    break;
            }
            tr.appendChild(td);
        }
        return tr;
    }

    update() {
        while(this.listElement.children.length > 1) {
            this.listElement.deleteRow(1);
        }

        let counter = 0;
        for (const book of this.myLibrary) {
            list.listElement.appendChild(ListBinding.createListItem(book, counter, this));
            counter++;
        }
    }

    add(book) {
        this.myLibrary.push(book);
        this.update();
    }

    remove(index) {
        this.myLibrary.splice(index, 1);
        this.update();
    }
}

function resetDialog() {
    bookTitleDialog.value = "";
    bookAuthorDialog.value = "";
    bookPagesDialog.value = "";
    bookStatusDialog.checked = false;
}

const list = new ListBinding(table);