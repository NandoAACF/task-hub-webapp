module.exports = (app) => {
    const notes = require("../controllers/note.controller.js");
    const authMiddleware = require("../middlewares/auth.middleware.js");
    var router = require("express").Router();

    // Memanggil fungsi authMiddleware untuk menjalan proses autorisasi sebelum melakukan request
    router.use(authMiddleware);

    // Membuat endpoint untuk mengakses note controller
    router.get("/filterfavorite", notes.filterByFavorite);
    router.get("/filtertopic/:topic", notes.filterByTopic);
    router.get("/sortbyoldest", notes.sortByOldest);
    router.get("/sortbylatest", notes.sortByLatest);
    router.get("/", notes.findAll);
    router.get("/list/:userId", notes.findByUserId);
    router.post("/", notes.create);
    router.get("/:id", notes.findOne);
    router.put("/:id", notes.update);
    router.delete("/:id", notes.delete);
    router.delete("/list/:userId", notes.deleteAllNotesByUserId);
    router.get("/findUniqueTopic/:userId", notes.findUniqueTopic);

    // Jika user mengakses endpoint /api/notes, maka akan diarahkan ke router yang telah dibuat di atas
    app.use("/api/notes", router);
};
