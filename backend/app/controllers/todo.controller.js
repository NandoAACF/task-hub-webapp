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
        priority: req.body.priority,
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

exports.findOne = (req, res) => {
    // req.params untuk mendapatkan data yang dikirimkan melalui parameter url
    const id = req.params.id;
    Todo.findById(id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while showing the todo.",
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Todo.findByIdAndUpdate(id, { $set: req.body })
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    message: `Cannot update Todo with id = ${id}. Maybe Todo was not found!`,
                });
            } else {
                res.send({ message: "Todo was updated successfully." });
            }
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while updating the todo.",
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Todo.findByIdAndRemove(id)
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    message: `Cannot delete Todo with id = ${id}. Maybe Todo was not found!`,
                });
            } else {
                res.send({ message: "Todo was deleted successfully." });
            }
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while deleting the todo.",
            });
        });
};

exports.deleteAll = (req, res) => {
    Todo.deleteMany()
        .then((result) => {
            res.send({ message: `${result.deletedCount} Todos were deleted successfully.` });
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while delete all todos.",
            });
        });
};

exports.filterByCategory = (req, res) => {
    const category = req.params.category.replace("-", " ");
    const filter = { category: { $regex: new RegExp(category, "i") } };
    Todo.find(filter)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while showing the category.",
            });
        });
};
