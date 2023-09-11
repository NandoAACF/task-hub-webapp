const db = require("../models");
const Todo = db.todos;

exports.findAll = (req, res) => {
    Todo.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving todos.",
            });
        });
};

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // req.body untuk mendapatkan data yang dikirimkan melalui body request
    const todo = new Todo({
        title: req.body.title,
        desc: req.body.desc,
        category: req.body.category,
        deadline: req.body.deadline,
    });

    todo.save(todo)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while creating the todo.",
            });
        });
};
