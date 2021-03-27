const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imageSchema = new Schema({
    name: {type: String, require: true},
    img:
    {
        data: Buffer,
        contentType: String
    }
})

module.exports = imageSchema;