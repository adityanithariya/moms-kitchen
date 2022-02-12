const express = require("express");
const mongoose = require("mongoose")
const join = require("path").join

let app = express();
let port = 3000;

// Configuring static directory
app.use("/static", express.static("static"));
// Configuring views
app.set("views", join(__dirname, "views"));
// Configuring pug as template engine
app.set("view engine", "pug");

// Configuring the Database
// mongoose.connect("mongodb://localhost/myDatabase", {useNewUrlParser: true});
// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));


app.get("/index", (req, res)=>{
    res.status(200).render("index.pug");
});

// Listen on the specified port
app.listen(port, ()=>{
    console.log(`Listening on https://127.0.0.1/${port}`);
})