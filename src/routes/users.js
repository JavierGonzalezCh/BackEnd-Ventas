const express = require("express");
const userSchema = require("../models/user")

const usersRoutes = express.Router();

// Create User
usersRoutes.post("/users", (req,res) =>{
    const user = userSchema(req.body);
    user
        .save()
        .then((dato) => res.json(dato))
        .catch((err)=> console.error(err));
});

// Get all User
usersRoutes.get("/users", (req,res) =>{
    userSchema
        .find()
        .then((dato) => res.json(dato))
        .catch((err)=> console.error(err));
});

// Get User
usersRoutes.get("/users/:id", (req,res) =>{
    const {id} = req.params 
    userSchema
        .findById(id)
        .then((dato) => res.json(dato))
        .catch((err)=> console.error(err));
});


// Upgrade  User
usersRoutes.put("/users/:id", (req,res) =>{
    const {id} = req.params;
    const {name,role,status} = req.body;
    userSchema
        .updateOne({_id:id},{$set:{name,role,status}})
        .then((dato) => res.json(dato))
        .catch((err)=> console.error(err));
});

// Delete User
usersRoutes.delete("/users/:id", (req,res) =>{
    const {id} = req.params;
    userSchema
        .remove({_id:id})
        .then((dato) => res.json(dato))
        .catch((err)=> console.error(err));
});

module.exports = usersRoutes;