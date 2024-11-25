const { validationResult } = require("express-validator");
const UserModel = require("../model/userModel");

const createUser = async (req, res, next) => { 
    const { body } = req;

    if(!body.name || body.email || !body.add ){
        return res.status(400).json({ 
            "message":"Data is not valid",  
        })
    }

    try {
        await UserModel.createUser(req.body)
        res.status(201).json({ 
            "message":"Successfully created data", 
            "data": req.body
        })
    } catch (err) {
        res.status(500).json(err);
    }
    
    next();
}

const getUser = async (req, res, next) => {
    try {
        const [data] = await UserModel.getUsers();
        res.status(200).json({ 
            "message":"Successfully added data",
            "data": data
        });
    } catch (err) {
        res.status(500).json(err);
    }
    
    next();
}
 
const updateUser = async (req, res, next) => {
    const { body } = req;
    
    if(!body.name || body.email || !body.add ){
        return res.status(400).json({ 
            "message":"Data is not valid",  
        })
    }

    try{ 
        await UserModel.updateUser(req.params.userId, req.body)
        res.status(201).json({ 
            "message":"Successfully update data", 
            "data": {
                "id": req.params.userId, 
            } 
        })
    } catch (err) { 
        res.status(500).json(err)
    }

    next();
}
 
const deleteUser = async (req, res, next) => {
    try{ 
        await UserModel.deleteteUser(req.params.userId)

        res.status(201).json({ 
            "message":"Successfully deleted data", 
            "data": {
                "id": req.params.userId, 
            }
        });
    } catch (err) { 
        res.status(500).json(err);
    }

    next();
}

const getUserById = (req, res, next) => {
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

module.exports = { createUser, getUser, updateUser, deleteUser, getUserById }