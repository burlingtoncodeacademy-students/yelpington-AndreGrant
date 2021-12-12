//imports express, sets app var to function express, & sets port variable to view on a server
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//sets up static server
app.use(express.static("./public"));

//routes to homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/public/index.html");
});

//rputes to restaurants id for CS to pull from, can visit from json filename
app.get("/api/:id", (req, res) => {
  res.sendFile(__dirname + `/api/${req.params.id}.json`);
});

//routes to restaurant.json file
app.get("/api/restaurant", (req, res) => {
  res.sendFile(__dirname + "/api/restaurants.json");
});

//routes to restaurants name
app.get("/api/restaurants-id", (req, res) => {
  res.sendFile(__dirname + "/api/restaurants-id.json");
});

//catches errors
app.get("*", (req, res) => {
  res.send("Hmmm...Seems there is nothing here!");
});

//sets up to listen on port assigned
app.listen(port, () => {
  console.log(`Ears open and listening on port ${port}!`);
});
