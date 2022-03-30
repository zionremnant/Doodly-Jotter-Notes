# Doodly Note Organizer

## Overview

Creating a Note Taker that can be used to write and save notes. The app uses an Express.js back end and will save and retrieve user generated note data from a JSON file. The application is built with the back end, connect the two, and then deploy the finished application to Heroku.

## Begin

On the back end, the application includes a db.json file that is used to store and retrieve notes using the fs module.

The following HTML routes are created:

- GET /notes returns the notes.html file.
- GET \* returns the index.html file.

The following API routes are created:

- GET /api/notes reads the db.json file and returns all saved notes as JSON.
- POST /api/notes receives a new note to save on the request body, adds it to the db.json file, and then returns the new note to the client. Each note is given a unique id when it's saved.

## Screenshot

## Resources

-
