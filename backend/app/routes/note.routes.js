module.exports = (app) => {
    const notes = require("../controllers/note.controller.js");
    var router = require("express").Router();

    // Membuat endpoint untuk mengakses note controller
    router.get("/filterfavorite", notes.filterByFavorite);
    router.get("/filtertopic/:topic", notes.filterByTopic);
    router.get("/sortbyoldest", notes.sortByOldest);
    router.get("/sortbylatest", notes.sortByLatest);
    router.get("/", notes.findAll);
    router.post("/", notes.create);
    router.get("/:id", notes.findOne);
    router.put("/:id", notes.update);
    router.delete("/:id", notes.delete);
    router.delete("/", notes.deleteAll);

    // Jika user mengakses endpoint /api/notes, maka akan diarahkan ke router yang telah dibuat di atas
    app.use("/api/notes", router);
};
