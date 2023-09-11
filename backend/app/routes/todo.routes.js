module.exports = (app) => {
    const todos = require("../controllers/todo.controller.js");
    var router = require("express").Router();

    router.get("/", todos.findAll);
    router.post("/", todos.create);

    app.use("/api/todos", router);
};
