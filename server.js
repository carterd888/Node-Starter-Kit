const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send("Hello World");
// console.log("Daniel", request);
});

app.get("/chocolate", function (req, res) {
  res.send("Mm chocolate :O");
});

app.get("/node", function (req, res) {
  res.send("Node.JS here we come!");
});

app.get("/codeyourfuture", function (req, res) {
  res.send("Code Your Future!");
});

app.get("/test", function (req, res) {
  res.sendFile(__dirname + "/test.html");
});

app.get("/search", function (req, res) {
  let searchQuery = req.query.value;
  let searchQuery2 = req.query.amount;
  res.send("Hello World! You searched for value " + searchQuery + "amount " + searchQuery2);
});

// make a json file with array of strings
// create route that takes a search query parameter
// returns all strings that contain search query i.e CAT contains AT

app.get("/wordsearch", function (req, res) {
  let searchQuery = req.query.animal;
  let searchQuery2 = req.query.start || "";
  let searchQuery3 = req.query.end || "";
  let wordArray = require("./array.json");

//   res.json(wordArray.filter(item => item.includes(searchQuery)));
res.json(wordArray.filter(item => item.toLowerCase()
.startsWith(searchQuery2.toLowerCase()) 
&& item.toLowerCase().endsWith(searchQuery3.toLowerCase())));
});


app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

