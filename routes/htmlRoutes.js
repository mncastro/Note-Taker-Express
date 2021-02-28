// Variables for dependencies and routes

const express = require("express");
const path = require("path");


// HTML routes to front end

module.exports = function (app) {
    app.use(express.static(path.join(__dirname, "../public")));

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // If no data, sends user to index
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};