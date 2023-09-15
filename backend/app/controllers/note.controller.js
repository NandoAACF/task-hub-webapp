const db = require("../models");
const Note = db.notes;

exports.findAll = (req, res) => {
    Note.find()
        .then((result) => {
            res.status(200).send(result);
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
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while creating the note.",
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Note.findById(id)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while showing the note.",
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
                res.status(200).send({ message: "Note was updated successfully." });
            }
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while update the note.",
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Note.findByIdAndRemove(id)
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    message: `Cannot delete Note with id = ${id}. Maybe Note was not found!`,
                });
            } else {
                res.status(200).send({ message: "Note was deleted successfully." });
            }
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while deleting the note.",
            });
        });
};

exports.deleteAll = (req, res) => {
    Note.deleteMany()
        .then((result) => {
            res.status(200).send({ message: `${result.deletedCount} Todos were deleted successfully.` });
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while deleting all the notes.",
            });
        });
};

exports.filterByTopic = (req, res) => {
    const topic = req.params.topic.replace("-", " ");
    const filter = { topic: { $regex: new RegExp(topic, "i") } };
    Note.find(filter)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while showing the topic.",
            });
        });
};

exports.filterByFavorite = (req, res) => {
    Note.find({ favorite: true })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while showing all favorite posts.",
            });
        });
};
