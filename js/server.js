const express = require("express");
const path = require("path");
const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html')); 
});

app.get("/contact", (req, res) => {
    res.send("contact page is not yet implemented");
});

app.get("/about", (req, res) => {
    res.send("about page not yet implemented");
});

app.listen(3000, () =>{
    console.log("server ssarted on port " + port);
});