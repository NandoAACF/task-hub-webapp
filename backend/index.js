const express = require("express");
const cors = require("cors");

// Kalau mau start server tinggal command npm start setiap resave bakal tercompile sendiri secara otomatis
const app = express();

// Menggunakan express.json agar kita melakukan parse request dalam bentuk JSON
app.use(express.json());
// Mengaktifkan request dalam bentuk form urlencoded yang biasa diperlukan ketika kita mengupload file atau data yg dikirim melalui form
app.use(express.urlencoded({ extended: true }));
// Supaya frontend bisa mengakses backend
app.use(cors());

// Untuk menghubungkan ke database
const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application." });
});

require("./app/routes/todo.routes")(app);
require("./app/routes/user.routes")(app);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
