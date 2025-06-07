const goBackHomeBtn = document.querySelector(".go-back-home-btn");
const enteredBookName = document.querySelector(".entered-book-name");
const selectedRating = document.querySelector("select");
const descriptionText =  document.querySelector("textarea");
const addBookBtn = document.querySelector(".add-book-btn");

var savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
var darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

if (darkMode) document.body.classList.add("dark-mode");

addBookBtn.addEventListener("click", ()=> {
   if (enteredBookName.value !== "") {
        const bookObj = {
            name: enteredBookName.value,
            rating: selectedRating.value,
            description: descriptionText.value
        };

        savedBooks.push(bookObj);
        localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
        enteredBookName.value = "";
        descriptionText.value = "";
        selectedRating.value = 5;
   } 
});

goBackHomeBtn.addEventListener("click", ()=> {
    window.location.href = "index.html";
});