const express = require("express");
const mustacheExpress = require('mustache-express');
const data = require("./data.js");
const app = express();

app.use(express.static("public"));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


app.get("/",function (req,res) {
  res.render("index",data);
});

app.get("/1",function (req,res) {
  res.render("user",data.users[0]);
});
//res.render("index",data.users[chosenUser]);

app.listen(3000, function () {
  console.log("server running on localhost:3000");
});
