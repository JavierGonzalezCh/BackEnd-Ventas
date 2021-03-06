const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("user", userSchema);