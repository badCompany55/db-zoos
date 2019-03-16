const express = require("express");
const helm = require("helmet");
const morg = require("morgan");
const defaultRouter = require("./routes/defaultRouter.js");

const server = express();

server.use(helm(), express.json(), morg("dev"));
server.use("/api/zoos", defaultRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Welcome to Zach's version of the db-zoos`);
});
module.exports = server;
