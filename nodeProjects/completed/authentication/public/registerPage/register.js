var links = document.querySelectorAll("nav a");
for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href") === "/users/register") {
        links[i].style.color = "black";
        links[i].setAttribute("href", "#");
    }
}