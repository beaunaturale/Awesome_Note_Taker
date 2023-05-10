const express = require('express');
const path = require('path');
const PORT = 3001;
const fs = require('fs');

const app = express();

const notes = require('/db/db.json')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
  res.json(notes.slice(1));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
res.sendFile(path.join(__dirname, 'public/notes.html'))
});

app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, 'public/index.html'))
});

// note function
// delete function

app.delete('/api/notes/:id', (req, res) => {
  deleteNote(req.params.id, notes)
  res.json(true);
});


app.listen(PORT, () => 
  console.log(`Example app listening at http://localhost:${PORT}`)
);
