const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = db.user;

exports.register = (req, res) => {

    const {username, email, password} = req.body;
    if (!email || !username || !password) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //Melakukan hashing terhadap password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // req.body untuk mendapatkan data yang dikirimkan melalui body request
    const user = new User({
        username: username,
        email: email,
        password: hashedPassword,
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

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(404).send("User not found");

        const isPwdCorrect = await bcrypt.compareSync(req.body.pwd, user.pwd);
        if(!isPwdCorrect) return res.status(400).send('Wrong password');
        
        //Membuat token yang terdiri dari dua access token dan refresh token
        const accessToken = jwt.sign({id: user.id}, process.env.AUTH_ACCESS_TOKEN, {expiresIn: '10s'});
        const refreshToken = jwt.sign({id: user.id}, process.env.AUTH_REFRESH_TOKEN, {expiresIn: '1h'});
        
        const data = {
            user: user,
            accessToken: accessToken,
            refreshToken: refreshToken
        };  

        return res.status(200).json({
            message: "You are authenticated",
            data: data,
        });

    } catch(err) {
        return res.status(500).send({
            message:err.message
        });
    }
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