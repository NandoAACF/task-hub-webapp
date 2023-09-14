module.exports = (app) => {
    const notes = require("../controllers/note.controller.js");
    var router = require("express").Router();

    router.get("/", notes.findAll);

    app.use("/api/notes", router);
};
