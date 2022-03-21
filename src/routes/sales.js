const express = require("express");
const saleSchema = require("../models/sale")

const salesRoutes = express.Router();

// Create Sales
salesRoutes.post("/sales", (req,res) =>{
    const sale = saleSchema(req.body);
    sale
        .save()
        .then((dato) => res.json(dato))
        .catch((err)=> console.error(err));
});

// Get all Sales
salesRoutes.get("/sales", (req,res) =>{
    saleSchema
        .find()
        .then((dato) => res.json(dato))
        .catch((err)=> console.error(err));
});

// Get Sales
salesRoutes.get("/sales/:id", (req,res) =>{
    const {id} = req.params 
    saleSchema
        .findById(id)
        .then((dato) => res.json(dato))
        .catch((err)=> console.error(err));
});


// Upgrade  Sales
salesRoutes.put("/sales/:id", (req,res) =>{
    const {id} = req.params;
    const {total,date,client,idClient} = req.body;
    saleSchema
        .updateOne({_id:id},{$set:{total,date,client,idClient}})
        .then((dato) => res.json(dato))
        .catch((err)=> console.error(err));
});

// Delete Sales
salesRoutes.delete("/sales/:id", (req,res) =>{
    const {id} = req.params;
    saleSchema
        .remove({_id:id})
        .then((dato) => res.json(dato))
        .catch((err)=> console.error(err));
});

module.exports = salesRoutes;