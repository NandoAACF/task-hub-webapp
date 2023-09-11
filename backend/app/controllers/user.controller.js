const db = require("../models");
const User = db.user;

exports.register = (req, res) => {
    if (!req.body.email || !req.body.username || !req.body.password) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // req.body untuk mendapatkan data yang dikirimkan melalui body request
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    user.save(user)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while registering.",
            });
        });
};

exports.findOne = (req, res) => {
    // req.params untuk mendapatkan data yang dikirimkan melalui parameter url
    const id = req.params.id;
    User.findById(id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while getting the detail of user.",
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    User.findByIdAndRemove(id)
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    message: `Cannot delete User with id = ${id}. Maybe User was not found!`,
                });
            } else {
                res.send({ message: "User was deleted successfully." });
            }
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while deleting the user.",
            });
        });
};