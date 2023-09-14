const db = require("../models");
const Note = db.notes;

exports.findAll = (req, res) => {
    Note.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes.",
            });
        });
};

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const note = new Note({
        title: req.body.title,
        desc: req.body.desc,
        topic: req.body.topic,
        favorite: req.body.favorite ? req.body.favorite : false,
    });

    note.save(note)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while creating the note.",
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Note.findByIdAndUpdate(id, req.body)
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    message: `Cannot update Note with id = ${id}. Maybe Note was not found!`,
                });
            } else {
                res.send({ message: "Note was updated successfully." });
            }
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while update the note.",
            });
        });
};