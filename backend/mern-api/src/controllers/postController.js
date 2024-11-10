const { validationResult } = require("express-validator");
const PostModel = require("../models/postModel")

const createPost = (req, res, next) => {
    const { title_post, body_post, user_id, name } = req.body
    // const date = new Date();
    // const created_at = date.toJSON().slice(0,19).replace("T",":") 
    const errors = validationResult(req)
 
    if(!errors.isEmpty()){  
        const err = new Error("Invalid value")
        err.status =  400 
        err.data = errors.array()

        throw err
    }  

    const posting = new PostModel({
        "title_post": title_post,  
        "body_post": body_post,
        "author": 
        {
            "user_id": user_id,
            "name": name
        }
    });

    posting.save()
    .then( result => {   
        const data = {
            "code":"201",
            "message":"Successfully added data",
            "data": result
        } 

        res.status(201).json(data)
    })
    .catch( err => { 
        console.log(err);
        
        res.status(500).json({
            "status":"500",
            "message":"Internal Server Error"
        }) 
    }); 
}

const getPost = (req, res, next) => {
    res.json(
            { 
                status: 200, 
                message: "Successfully get data", 
                data : { 
                    "title_post": "Harry potter book 1",
                    "author_post": "JK Rowling",
                    "date_post": "JK Rowling",
                    "body_post": "Once upon a time bla bla bla bla",
                }
            } 
        )

    next()
}

const updatePost = (req, res, next) => {
    res.json(
            { 
                status: 200, 
                message: "Successfully updated data",  
            } 
        )

    next()
}
 
const deletePost = (req, res, next) => {
    res.json(
            { 
                status: 200, 
                message: "Successfully deleted data",  
            } 
        )

    next()
}

module.exports = { createPost, getPost, updatePost, deletePost }