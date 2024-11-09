const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const postRoutes = require("./src/routes/v1/postRoute");
const authRoutes = require("./src/routes/v1/authRoute");

// Enable CORS for all routes
app.use(bodyParser.json());
app.use(cors());

// /v1/auth/*
app.use("/v1/auth", authRoutes);

// /v1/blog/*
app.use("/v1/blog", postRoutes);

app.use((error, req, res, next) => {
    const status = error.status || 50
    const message = error.message
    const data = error.data

    res.status(status).json({
        "message": message,
        "data": data
    })
});

mongoose.connect("mongodb+srv://ceepei14:hXvpMZrePqHSp2Yl@cluster0.lv06f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then( () => {
    app.listen(4000);
})
.catch( err => console.log(err));

