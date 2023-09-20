module.exports = (app) => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();

    // Membuat endpoint untuk mengakses user controller
    router.get("/", user.findAll);
    router.get("/:id", user.findOne);
    router.post("/register", user.register);
    router.delete("/:id", user.delete);
    router.post("/login", user.login);

    // Jika user mengakses endpoint /api/user, maka akan diarahkan ke router yang telah dibuat di atas
    app.use("/api/user", router);
};
