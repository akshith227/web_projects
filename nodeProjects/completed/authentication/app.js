const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
var app = express();
const PORT = process.env.PORT || 5000;
const db = require('./config/keys').MongoURI;
console.log(db);
mongoose.connect("mongodb://localhost:27017/authentication", {
    useNewUrlParser: true
});
app.use(expressLayouts);
app.set("view engine", "ejs")
app.use(express.urlencoded({
    extended: false,
}));
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);
const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});
app.use(express.static(`${__dirname}/public`));
//Routes
app.use("/", require('./routes/index'));
app.use("/users", require('./routes/users'));
app.use("*", require('./routes/404'));

app.listen(PORT, console.log(`Server has started on port ${PORT}`));