const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    value:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("product", productSchema);