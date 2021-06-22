const express = require('express');
const app = express();
const request = require('request');
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.render("home");
});
app.get("/results", (req, res) => {
    var movieName = req.query.movieName;
    request(`http://www.omdbapi.com/?apikey=thewdb&s=${movieName}`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            if (data["Response"] == "True") {
            res.render("results", {results:data["Search"], searchQ: req.params.searchQ});
            } else {
                console.log(data["Response"]);

                res.send("Invalid entry");
            }
        } else {
            console.log('error:', error); // Print the error if one occurred
        }
    });
});
app.listen(port, () => {
    console.log(`Serving port ${port}`);

})