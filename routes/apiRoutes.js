// Variables for dependencies and routes for importing data

const db = require("../db/db.json");
const path = require("path");
const fs = require("fs");
const notesData = require("../db/notes");

// HTTP API requests scripts

// GET route

module.exports = function (app) {
    app.get("/api/notes", (req, res) => {
        fs.readFile("./db/db.json", (err, notesData) => {
            if (err) throw err;
            res.json(JSON.parse(notesData));
        });
    });


    // POST request

    app.post("/api/notes", (req, res) => {
        fs.readFile("./db/db.json", (err, data) => {
            if (err) throw err;
            const notesData = JSON.parse(data);
            notesData.push(req.body);
            console.log(req.body);
            for (let i = 0; i < notesData.length; i++) {
                notesData[i].id = i + 1;
            } // Turn data into string and push into database
            fs.writeFile("./db/db.json", JSON.stringify(notesData), (err) => {
                if (err) throw err;
                res.send(db);
            });
        });
    });

    // DELETE request
    app.delete("/api/notes/:id", (req, res) => {
        fs.readFile("./db/db.json", (err, data) => {
            if (err) throw err;
            let newNote = JSON.parse(data);
            for (let i = 0; i < newNote.length; i++) {
                if (newNote[i].id == req.params.id){
                    newNote.splice(i, 1);
                }
            }

            // Write front end and export note from database
            fs.writeFile("./db/db.json", JSON.stringify(newNote), (err) => {
                if (err) throw err;
                res.send(newNote);
            });
        });
    });
};