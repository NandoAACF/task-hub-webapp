module.exports = (app) => {
    // Import user controller dan express router
    const users = require("../controllers/user.controller.js");
    var router = require("express").Router();

    // Membuat endpoint untuk mengakses user controller
    router.post("/register", users.register);
    router.post("/login", users.login);

    // Jika user mengakses endpoint /api/users, maka akan diarahkan ke router yang telah dibuat di atas
    app.use("/api/users", router);
};
