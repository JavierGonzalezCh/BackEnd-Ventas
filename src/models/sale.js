const mongoose = require("mongoose");

const saleSchema = mongoose.Schema({
    total:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    client:{
        type: String,
        required: true
    },
    idClient:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("sale", saleSchema);