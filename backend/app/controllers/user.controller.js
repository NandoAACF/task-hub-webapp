const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const ejs = require('ejs');
const nodemailer = require("nodemailer")
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
            return res.status(500).send({ message: "Email is already taken!" });
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
        if (!user) return res.status(404).send({message: "User not found"});

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordCorrect) return res.status(400).send({message: "Wrong password"});

        //Membuat token
        const token = jwt.sign({ id: user.id, username: user.username, email: user.email }, process.env.AUTH_REFRESH_TOKEN, { expiresIn: "12h" });

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
            res.status(500).send({
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

// Untuk mendefinisikan email pengirim
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD
    }
});

exports.sendResetPasswordEmail = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        // Mengecek apakah email yang dimasukkan sudah pernah digunakan
        if (!user) {
            return res.status(404).send({
                message: "Your email hasn't been registered. Create a new account!",
            });
        }
        // Menambahkan token khusus untuk reset password
        const resetToken = jwt.sign({ email: user.email }, process.env.AUTH_REFRESH_TOKEN, { expiresIn: "1h" });

        // Konten dari email yang dikirimkan sehingga user diarahkan ke halaman untuk reset password
        ejs.renderFile(path.join(__dirname, '..', 'views', 'email.ejs'), { username: user.username, email: user.email, resetToken }, (err, data) => {
            if(err) {
                return res.status(500).send({
                    message: err.message || "Some error occurred while generating email content.",
                });
            }

            // Buat mendefenisikan email penerima
            const mailOptions = {
                from: '"Taskify" <' + process.env.SENDER_EMAIL + '>',
                to: email,
                subject: 'Reset Password',
                html: data,
            };

            transporter.sendMail(mailOptions, (err, info) => {
                if(err) {
                    return res.status(500).send({
                        message: err.message || "Some error occurred while sending email.",
                    });
                } else {
                    return res.status(200).send({
                        message: "Email sent successfully"
                    });
                }
            });
        });
    } catch (err) {
        return res.status(500).send({
            message: err.message || "Some error occurred while processing the request.",
        });
    }
};

exports.resetPassword = async (req, res) => {
    const { resetToken, email, new_password, new_password_confirmation } = req.body;

    try {
        const decodedToken = jwt.verify(resetToken, process.env.AUTH_REFRESH_TOKEN);
        
        if (decodedToken.email !== email) {
            return res.status(401).send({
                message: "Invalid token for the provided email.",
            });
        }

        if (new_password !== new_password_confirmation) {
            return res.status(400).send({
                message: "Password and password confirmation do not match",
            });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedNewPassword = bcrypt.hashSync(new_password, salt);

        const result = await User.findOneAndUpdate({ email }, { password: hashedNewPassword });

        if (!result) {
            return res.status(404).send({
                message: `Cannot update User with email = ${email}. Maybe User was not found!`,
            });
        }

        return res.status(200).send({ message: "Password was reset successfully." });
    } catch (err) {
        return res.status(401).send({
            message: "Invalid or expired token.",
        });
    }
};

exports.changePassword = async (req, res) => {
    const userId = req.params.id;
    const { current_password, new_password, new_password_confirmation } = req.body;
    
    try {
        const user = await User.findById(userId);
        const isPasswordCorrect = bcrypt.compareSync(current_password, user.password);
        
        if (!isPasswordCorrect) {
            return res.status(400).send({ message: "Wrong password." });
        }

        if (new_password != new_password_confirmation) {
            return res.status(400).send({ message: "New password and confirmation dont match"});
        }

        const hashedNewPassword = bcrypt.hashSync(new_password, 10);
        user.password = hashedNewPassword;

        await user.save();

        return res.status(200).send({ message: "Password has been changed successfully."});
    } catch (err) {
        return res.status(500).send({
            message: err.message || "Some error occurred while changing the password.",
        });
    }
};