# Doodly Jotter Notes

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

## Screenshot & Demo

<img width="992" alt="Screen Shot 2022-03-29 at 9 17 12 PM" src="https://user-images.githubusercontent.com/99617307/160750879-43a775ef-e37d-407b-86eb-084f45c3ba84.png">

<iframe src="https://drive.google.com/file/d/1ucVwZTz21AeBJkmbiSkvdbdp9X_AqSWW/preview" width="640" height="480"></iframe>

## Resources

- https://note-organizer1.herokuapp.com/
- https://github.com/zionremnant/Doodly-Jotter-Notes
- https://drive.google.com/file/d/1ucVwZTz21AeBJkmbiSkvdbdp9X_AqSWW/view
