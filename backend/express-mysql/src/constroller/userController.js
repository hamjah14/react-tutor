const { validationResult } = require("express-validator");
const UserModel = require("../model/userModel");

const createUser = (req, res, next) => {
    console.log(req.body);

    res.status(200).json({ 
        "message":"Successfully get data", 
        "data": req.body
    })
}

const getUser = (req, res, next) => {
    res.status(200).json({ 
        "message":"Successfully added data",
        "data": {
            "name": "Hamjahr",
            "email": "hamham@gmail.com",
            "address": "Jakarta 45", 
        }
    })

    next();
}

 

const putUser = (req, res, next) => {
    res.status(200).json({ 
        "message":"Successfully update data", 
    })
}
 
const deleteUser = (req, res, next) => {
    res.status(200).json({ 
        "message":"Successfully deleted data", 
    })
}

module.exports = { createUser, getUser, putUser, deleteUser }