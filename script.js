const openDialog = document.querySelector("div.header button");
const closeDialog = document.querySelector("button#close")
const dialog = document.querySelector("dialog");
const newBook = document.querySelector("#confirmBtn")

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
});