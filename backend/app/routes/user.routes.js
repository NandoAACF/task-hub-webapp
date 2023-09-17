module.exports = (app) => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();

    router.get("/:id", user.findOne);
    router.post("/register", user.register);
    router.delete("/:id", user.delete);
    router.post("/login", user.login);
    
    app.use("/api/user", router);
};
