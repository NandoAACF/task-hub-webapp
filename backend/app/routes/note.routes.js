module.exports = (app) => {
    const notes = require("../controllers/note.controller.js");
    var router = require("express").Router();

    app.use("/api/notes", router);
};
