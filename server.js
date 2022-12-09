require("dotenv").config();
const express = require("express");
const routing = require('./src/routes')

const app = express();

app.get("/", (req, res) => res.send("test"));

app.listen(process.env.PORT, process.env.HOST, () =>
  console.log(`listening on localhost:${process.env.PORT}`)
);

app.use('/api/v1', routing)
