window.onload = function() {
    var btn = document.querySelector("button");
    var body = document.querySelector("body");
    btn.addEventListener("click", function(){
        body.classList.toggle("bgcolor");
    })
}