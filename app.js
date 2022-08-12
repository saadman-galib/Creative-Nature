const express = require("express");
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("home");
} );

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/services", (req, res) => {
    res.render("services");
});

app.get("/info", (req, res) => {
    res.render("info");
});











app.listen(3000, function(){
    console.log("server started on port 3000") 
});