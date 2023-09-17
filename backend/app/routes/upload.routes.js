const multer = require("multer");
const path = require("path");

// Menyimpan file dalam folder uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../uploads/"));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

// Melakukan checking apakah extensi file berupa jpg atau png
const fileFilter = function (req, file, cb) {
    const ext = path.extname(file.originalname);

    if (ext !== ".jpg" && ext !== ".png") {
        return cb(new Error("Only images are allowed!"));
    }

    cb(null, true);
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

module.exports = (app) => {
    const uploadController = require("../controllers/upload.controller");
    var router = require("express").Router();
    
    router.post("/upload", upload.single("file"), uploadController.uploadFile);

    app.use("/api", router);
};
