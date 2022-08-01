const express = require("express");
const path = require("path");
const routes = require("./config");
const app = express();
const PORT = process.env.PORT || 4000;

routes.forEach((route) => {
  app.route(route.request)[route.type]((req, res) => {
    res.header("Content-Type", "application/json");
    res.sendFile(path.join(__dirname, route.response));
  });
});

app.listen(PORT, (req, res) => {
  console.log(`MOCK SERVER is running ${PORT}`);
});
