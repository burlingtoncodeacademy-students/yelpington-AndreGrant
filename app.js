const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Ears open and listening on port ${port}!`);
});

app.get("/api/restaurant", (req, res) => {
  res.sendFile(__dirname + "/api/restaurants.json");
});

app.get("/api/restaurants-id", (req, res) => {
  res.sendFile(__dirname + "/api/restaurants-id.json");
});
