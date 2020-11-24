const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3200;
const url = "mongodb://localhost/todoDB";
const CodeLab = require("./router");
const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
app.use(cors());
app.use(express.json());
app.use("/", CodeLab);
app.listen(PORT, () => {
  console.log(`${PORT}`);
});
