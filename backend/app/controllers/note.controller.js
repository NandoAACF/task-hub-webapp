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
