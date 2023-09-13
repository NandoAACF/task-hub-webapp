module.exports = (app) => {
    const todos = require("../controllers/todo.controller.js");
    var router = require("express").Router();

    router.get("/", todos.findAll);
    router.post("/", todos.create);
    router.put("/:id", todos.update);
    router.delete("/:id", todos.delete);
    router.delete("/", todos.deleteAll);
    router.get("/filtercategory/:category", todos.filterByCategory);
    router.get("/filterpriority/:priority", todos.filterByPriority);
    router.get("/sortdeadlineasc", todos.sortByDeadlineAsc);
    router.get("/sortdeadlinedesc", todos.sortByDeadlineDesc);
    router.get("/sortbyoldest", todos.sortByOldest);
    router.get("/sortbylatest", todos.sortByLatest);

    app.use("/api/todos", router);
};
