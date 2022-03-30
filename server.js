const express = require("express");
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

// GET Route for homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// GET Route for notes page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// Wildcard route to direct users to a 404 page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, ".public/index.html"));
});

function createNew(body, notesArr) {
  const newNote = body;
  if (!Array.isArray(notesArr)) notesArr = [];
  if (notesArr.length === 0) notesArr.push(0);
  body.id = notesArr[0];
  notesArr[0]++;
  notesArr.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "./db/db.json"),
    JSON.stringify(notesArr, null, 2)
  );
  return newNote;
}

app.post("api/notes", (req, res) => {
  const newNote = createNew(req.body, notes);
  res.json(newNote);
});

function deleteNote(id, notesArr) {
  for (let i = 0; i < notesArr.length; i++) {
    let note = notesArr[i];
    if (note.id == id) {
      notesArr.splice(i, 1);
      fs.writeFileSync(
        path.join(__dirname, "./db/db.json"),
        JSON.stringify(notesArr, null, 2)
      );
      break;
    }
  }
}

app.delete("/api/notes/:id", (req, res) => {
  deleteNote(req.params.id, notes);
  res.json(true);
});

app.listen(PORT, () => {
  console.log(`App listening at ${PORT} 🚀`);
});
