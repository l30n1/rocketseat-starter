const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

//192.168.99.100

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect("mongodb://192.168.99.100:27017/nodeapi", {
  useNewUrlParser: true
});

requireDir("./models");

const Product = mongoose.model("Product");

app.use("/api", require("./routes"));

app.listen(3001);
