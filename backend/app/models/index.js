const dbConfig = require("../../config/db.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.todos = require("./todo.model.js")(mongoose);
db.user = require("./user.model.js")(mongoose);
db.notes = require("./note.model.js")(mongoose);

module.exports = db;
