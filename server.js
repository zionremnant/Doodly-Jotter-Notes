const express = require("express");
const res = require("express/lib/response");
const fs = require("fs");
const path = require("path");
const notes = require("./db/db.json");
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/notes", (req, res) => {
  res.json(notes.slice(1));
});

app.listen(PORT, () => {
  console.log(`App listening at ${PORT} 🚀`);
});
