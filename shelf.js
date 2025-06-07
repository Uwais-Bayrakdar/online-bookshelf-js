const bookCards = document.querySelector(".book-cards");
const searchBookInput = document.querySelector(".search-book-input");

var savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
var darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

if (darkMode) document.body.classList.add("dark-mode");

if (savedBooks.length === 0) {
  const emptyMsg = document.createElement("p");

  emptyMsg.classList.add("empty-msg");

  emptyMsg.textContent = "No books added yet.";
  bookCards.style.border = "none";

  bookCards.appendChild(emptyMsg);
}
function renderBooks() {
    savedBooks.forEach(book => {
        let bookCard = document.createElement("div");
        let bookName = document.createElement("p");
        let bookRating = document.createElement("p");
        let bookDescription = document.createElement("p");
        let deleteBookBtn = document.createElement("button");

        bookCard.classList.add("book-card");
        bookName.classList.add("book-name");
        bookRating.classList.add("book-rating");
        bookDescription.classList.add("book-description");
        deleteBookBtn.classList.add("delete-book-btn");
        deleteBookBtn.dataset.bookName = book.name;

        bookName.textContent = `Book Name: ${book.name}`;
        bookRating.textContent = `Rating: ${book.rating}`;
        bookDescription.textContent = book.description ? `Description: ${book.description}`: `Description: (None)`;
        deleteBookBtn.textContent = "Clear Book From Shelf";

        bookCard.appendChild(bookName);
        bookCard.appendChild(bookRating);
        bookCard.appendChild(bookDescription);
        bookCard.appendChild(deleteBookBtn);
        bookCards.appendChild(bookCard);

        deleteBookBtn.addEventListener("click", ()=> {
            bookCards.removeChild(bookCard);
            const bookIndex = savedBooks.findIndex(b => b.name === book.name);
            if (bookIndex === -1) return;

            savedBooks.splice(bookIndex, 1);
            localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
            window.location.reload();
        });
    });
}

searchBookInput.addEventListener("input", ()=> {
    const inputValue = searchBookInput.value.toLowerCase(); 
    document.querySelectorAll(".book-card").forEach(book => {
        const name = book.querySelector(".book-name").textContent.toLowerCase();
        if (name.includes(inputValue)) book.style.display = "block";
        else book.style.display = "none";
    });
});

renderBooks();

document.querySelector(".clear-btn").addEventListener("click", ()=> {
    localStorage.removeItem("savedBooks");
    window.location.reload();
});

document.querySelector(".sort-by-name-btn").addEventListener("click", ()=> {
    savedBooks.sort((a, z) => a.name.localeCompare(z.name));
    localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
    bookCards.innerHTML = "";
    renderBooks();
    window.location.reload();
});

document.querySelector(".sort-by-rating-btn").addEventListener("click", ()=> {
    savedBooks.sort((small, big) => big.rating - small.rating);
    localStorage.setItem("savedBooks", JSON.stringify(savedBooks));    
    bookCards.innerHTML = "";
    renderBooks();
    window.location.reload();
});

document.querySelector(".go-back-home-btn").addEventListener("click",()=>{
    window.location.href = "index.html";
});