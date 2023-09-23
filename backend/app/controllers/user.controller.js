const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = db.user;

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!email || !username || !password) {
            res.status(400).send({ message: "Content can not be empty!" });
            return;
        }

        // Mengecek apakah email sudah diambil sebelumnya
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send({ message: "Email is already taken!" });
        }

        // Melakukan encoding terhadap password melalui hashing algorithm
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = new User({
            username: username,
            email: email,
            password: hashedPassword,
        });

        const result = await user.save();

        res.status(200).send(result);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while registering." });
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).send("User not found");

        const isPasswordCorrect = await bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordCorrect) return res.status(400).send("Wrong password");

        //Membuat token
        const token = jwt.sign({ id: user.id }, process.env.AUTH_REFRESH_TOKEN, { expiresIn: "12h" });

        const data = {
            user: user,
            token: token,
        };

        return res.status(200).json({
            message: "You are authenticated",
            data: data,
        });
    } catch (err) {
        return res.status(500).send({
            message: err.message || "Some error occured while authenticating",
        });
    }
};

exports.findAll = (req, res) => {
    User.find()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users.",
            });
        });
};

exports.findOne = (req, res) => {
    // req.params untuk mendapatkan data yang dikirimkan melalui parameter url
    const id = req.params.id;
    User.findById(id)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(500).send({
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
                res.status(200).send({ message: "User was deleted successfully." });
            }
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while deleting the user.",
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    User.findByIdAndUpdate(id, { $set: req.body })
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    message: `Cannot update User with id = ${id}. Maybe User was not found!`,
                });
            } else {
                res.status(200).send({ message: "User was updated successfully." });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the user.",
            });
        });
};
