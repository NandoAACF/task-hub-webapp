module.exports = (app) => {
    const todos = require("../controllers/todo.controller.js");
    var router = require("express").Router();

    app.use("/api/todos", router);
};
