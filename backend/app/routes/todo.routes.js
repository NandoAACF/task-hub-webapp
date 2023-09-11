module.exports = (app) => {
    const todos = require("../controllers/todo.controller.js");
    var router = require("express").Router();

    router.get("/", todos.findAll);
    router.post("/", todos.create);
    router.delete("/:id", todos.delete);
    router.put("/:id", todos.update);

    app.use("/api/todos", router);
};
