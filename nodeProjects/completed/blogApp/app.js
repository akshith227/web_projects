const express = require('express'),
   bodyParser = require('body-parser'),
expressSanitizer= require('express-sanitizer'),
methodOverride= require('method-override');
    app       = express(),
    mongoose  = require('mongoose'),
    port      = 3000;

mongoose.connect("mongodb://akshith:1ihavenoidea@ds131743.mlab.com:31743/blogapp", {
    useNewUrlParser: true
});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(expressSanitizer());
app.use(methodOverride("_method"))
/*****************************SETUP FINISHED********************************************/
var blogShchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
});
var Blog = mongoose.model("Blog", blogShchema);
// Blog.create({
//     title: "Test 1",
//     image: "https://source.unsplash.com/D8iZPlX-2fs",
//      body: "Test body for Test number 1"
// }, (err, blogPost) => {
//     if(err){
//         console.log(`We had an error: \n ${err}`);
//     } else {
//         console.log(blogPost);
//     }
// });
app.get("/", (req, res) => {
    res.redirect("/blogs");
});
app.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err){
            res.send(`Sorry we hit an error: ${err}`);
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});
app.post("/blogs", (req, res) => {
    var entry = req.body.blog;
    entry.body = req.sanitize(entry.body);
    Blog.create(entry, (err, entryMade)=>{
        if(err){
            res.redirect("new");
        } else {
            res.redirect("/blogs");
        }
    })
});
app.get("/blogs/new", (req, res) => {
    res.render("new");
});
app.get("/blogs/:id", (req, res) => {
    var id = req.params.id;
    Blog.findById(id, (err, post) => {
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("show", {post:post});
        }
    })
});
app.put("/blogs/:id", (req, res)=>{
    var entry = req.body.blog;
    entry.body = req.sanitize(entry.body);
    Blog.findOneAndUpdate(req.params.id, entry, (err, updatedBlog)=>{
        if(err){
            res.redirect(`/blogs/${req.params.id}/edit`);
        } else {
            res.redirect(`/blogs/${req.params.id}`)
        }
    });
});
app.delete("/blogs/:id", (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err) => {
        if(err){
            res.redirect("/blogs/" + req.params.id);
        } else {
            res.redirect("/blogs");
        }
    });
})
app.get("/blogs/:id/edit", (req, res)=>{
    var id = req.params.id;
    Blog.findById(id, (err, post) => {
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("edit", {post:post});
        }
    })
});
app.get("*", (req, res) => {
    res.render("fourzerofour");
});
app.listen(port, () => {
    console.log(`Blog app is running at ${port}`);

});