const db = require("../models");
const Todo = db.todos;

exports.findAll = (req, res) => {
    Todo.find()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving todos.",
            });
        });
};

exports.create = (req, res) => {
    // Title harus terisi
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // req.body untuk mendapatkan data yang dikirimkan melalui body request
    const todo = new Todo({
        userId: req.body.userId,
        title: req.body.title,
        desc: req.body.desc,
        category: req.body.category,
        deadline: req.body.deadline,
        priority: req.body.priority,
        status: req.body.status,
    });

    // Save todo
    todo.save(todo)
        .then((result) => {
            res.status(200).send(result);
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
            res.status(200).send(result);
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
                res.status(200).send({ message: "Todo was updated successfully." });
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
                res.status(200).send({ message: "Todo was deleted successfully." });
            }
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while deleting the todo.",
            });
        });
};

exports.deleteAllTodosByUserId = (req, res) => {
    const userId = req.params.userId;
    const filter = { userId: userId };
    Todo.deleteMany(filter)
        .then((result) => {
            res.status(200).send({
                message: `${result.deletedCount} Todos were deleted successfully.`,
            });
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

exports.filterByPriority = (req, res) => {
    const priority = req.params.priority;
    const filter = { priority: { $regex: new RegExp(priority, "i") } };
    Todo.find(filter)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while showing the priority.",
            });
        });
};

exports.sortByDeadlineAsc = (req, res) => {
    Todo.find()
        .sort({ deadline: 1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving todos.",
            });
        });
};

exports.sortByDeadlineDesc = (req, res) => {
    Todo.find()
        .sort({ deadline: -1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving todos.",
            });
        });
};

exports.sortByOldest = (req, res) => {
    Todo.find()
        .sort({ updatedAt: 1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving todos.",
            });
        });
};

exports.sortByLatest = (req, res) => {
    Todo.find()
        .sort({ updatedAt: -1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving todos.",
            });
        });
};

exports.findByUserId = (req, res) => {
    const userId = req.params.userId;
    const { category, deadline, sortBy, status, priority } = req.query;

    let filteredData = { userId: userId };
    if (category) {
        filteredData.category = category;
    }

    let sortedCondition = {};
    if (deadline) {
        if (deadline === "asc") {
            sortedCondition.deadline = 1;
        } else if (deadline === "desc") {
            sortedCondition.deadline = -1;
        }
    }

    if (sortBy) {
        if (sortBy === "oldest") {
            sortedCondition.updatedAt = 1;
        } else if (sortBy === "latest") {
            sortedCondition.updatedAt = -1;
        }
    }

    if(status && ["Hold", "InProgress", "Done"].includes(status)) {
        filteredData.status = status;
    }

    if(priority && ["low", "medium", "high"].includes(priority)) {
        filteredData.priority = priority;
    }

    Todo.find(filteredData)
        .sort(sortedCondition)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving todos.",
            });
        });
};
