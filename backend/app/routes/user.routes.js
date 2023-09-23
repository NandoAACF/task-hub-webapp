module.exports = (app) => {
    // Import user controller dan express router
    const users = require("../controllers/user.controller.js");
    const authMiddleware = require("../middlewares/auth.middleware.js");
    var router = require("express").Router();

    // Memanggil fungsi authMiddleware untuk menjalan proses autorisasi sebelum melakukan request
    router.use(authMiddleware);

    // Membuat endpoint untuk mengakses user controller
    router.get("/", users.findAll);
    router.get("/:id", users.findOne);
    router.delete("/:id", users.delete);
    router.put("/:id", users.update);

    // Jika user mengakses endpoint /api/users, maka akan diarahkan ke router yang telah dibuat di atas
    app.use("/api/users", router);
};
