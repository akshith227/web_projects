console.log("Hello Node.JS!!");
const express = require('express');
var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
const port = 3000;
app.get("/", function(req,res) {
    res.render("home");
});
app.get("/help", function(req,res) {
    res.render("help");
});
app.get("/dogs/:breed", function(req,res) {
    res.render("dogs", {breed:req.params.breed});
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));