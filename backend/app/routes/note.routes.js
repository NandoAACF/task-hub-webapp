module.exports = (app) => {
    const notes = require("../controllers/note.controller.js");
    var router = require("express").Router();

    router.get("/", notes.findAll);
    router.post("/", notes.create);
    router.put("/:id", notes.update);
    router.delete("/:id", notes.delete);

    app.use("/api/notes", router);
};
