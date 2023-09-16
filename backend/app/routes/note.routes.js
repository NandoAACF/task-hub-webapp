module.exports = (app) => {
    const notes = require("../controllers/note.controller.js");
    var router = require("express").Router();

    router.get("/filterfavorite", notes.filterByFavorite);
    router.get("/filtertopic/:topic", notes.filterByTopic);
    router.get("/sortbyoldest", notes.sortByOldest);
    router.get("/", notes.findAll);
    router.post("/", notes.create);
    router.get("/:id", notes.findOne);
    router.put("/:id", notes.update);
    router.delete("/:id", notes.delete);
    router.delete("/", notes.deleteAll);

    app.use("/api/notes", router);
};
