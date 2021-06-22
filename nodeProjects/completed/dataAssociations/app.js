const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/blog_demo");
var userSchema = new mongoose.Schema({
    name: String,
    email: String
});
var User = mongoose.model("User", userSchema);
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);