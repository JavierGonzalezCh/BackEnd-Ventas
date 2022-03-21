const express = require("express");
const productSchema = require("../models/product")

const productsRoutes = express.Router();

// Create Product
productsRoutes.post("/products", (req,res) =>{
    const product = productSchema(req.body);
    product
        .save()
        .then((dato) => res.json(dato))
        .catch((err)=> console.error(err));
});

// Get all Product
productsRoutes.get("/products", (req,res) =>{
    productSchema
        .find()
        .then((dato) => res.json(dato))
        .catch((err)=> console.error(err));
});

// Get Product
productsRoutes.get("/products/:id", (req,res) =>{
    const {id} = req.params 
    productSchema
        .findById(id)
        .then((dato) => res.json(dato))
        .catch((err)=> console.error(err));
});


// Upgrade product
productsRoutes.put("/products/:id", (req,res) =>{
    const {id} = req.params;
    const {name,value,status} = req.body;
    productSchema
        .updateOne({_id:id},{$set:{name,value,status}})
        .then((dato) => res.json(dato))
        .catch((err)=> console.error(err));
});

// Delete
productsRoutes.delete("/products/:id", (req,res) =>{
    const {id} = req.params;
    productSchema
        .remove({_id:id})
        .then((dato) => res.json(dato))
        .catch((err)=> console.error(err));
});

module.exports = productsRoutes;