const express = require("express");
const app = express();
const urlRouter = require("./routes/main");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', urlRouter);

app.listen(2000, () => {
    console.log("App started on port: 2000");
})
