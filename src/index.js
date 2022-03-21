const express = require ("express");
const mongoose = require ("mongoose");
const cors = require('cors');
require("dotenv").config();

const config = require('./config');

const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users")
const salesRoutes = require("./routes/sales")

const app = express();
const port = process.env.PORT || 9000;

// Middleware
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api",productsRoutes);
app.use("/api",usersRoutes);
app.use("/api",salesRoutes);

// Routes
app.get("/", (req,res) =>{
    res.send("Welcome to my API");
})

// mongodb Concetion
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log("Conectada a MongoDB Atlas"))
    .catch((error)=>console.error(error));


app.listen(port, () => console.log("Servidor en puerto", port))