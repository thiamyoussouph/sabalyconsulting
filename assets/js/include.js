// include.js
document.addEventListener("DOMContentLoaded", () => {
    includeHTML("header", "header.html");
    includeHTML("footer", "footer.html");
});

function includeHTML(tag, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(tag).innerHTML = data;
        })
        .catch(err => console.error(`Erreur de chargement de ${file}`, err));
}
