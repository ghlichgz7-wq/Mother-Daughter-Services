// Automatically updates year variable
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Changes active nav link decoration 
document.addEventListener("DOMContentLoaded", () => {
    const fullPath = window.location.pathname;
    let currentFile = fullPath.split("/").pop();

    if (currentFile === "" || currentFile === "index.html") {
        currentFile = "index.html";
    }

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        const linkFile = href.split("/").pop();

        if (currentFile === linkFile) {
            link.classList.add("active");
        }
    });
});