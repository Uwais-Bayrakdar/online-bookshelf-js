var darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

if (darkMode) {
    document.body.classList.add("dark-mode");
    document.querySelector(".dark-mode-toggle-btn").textContent = "Toggle Light Mode";
}

document.querySelector(".add-book").addEventListener("click", ()=>window.location.href="addbook.html");

document.querySelector(".see-bookshelf").addEventListener("click", ()=>window.location.href="shelf.html");

document.querySelector(".dark-mode-toggle-btn").addEventListener("click", ()=> {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode");

    document.body.classList.contains("dark-mode") 
    ? document.querySelector(".dark-mode-toggle-btn").textContent = "Toggle Light Mode" 
    : document.querySelector(".dark-mode-toggle-btn").textContent = "Toggle Dark Mode";

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
});