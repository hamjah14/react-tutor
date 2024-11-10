const { validationResult } = require("express-validator");
const PostModel = require("../models/postModel")

const createPost = (req, res, next) => { 
    const errors = validationResult(req)
    if(!errors.isEmpty()){  
        const err = new Error("Invalid value");
        err.status =  400;
        err.data = errors.array(); 
        throw err;
    }  

    if(!req.file){
        const err = new Error("File is not uploaded");
        err.status =  422; 
        throw err;
    }
    
    const { title_post, body_post, user_id, name } = req.body;
    const image = req.file.path
    // const date = new Date();
    // const created_at = date.toJSON().slice(0,19).replace("T",":") 

    const posting = new PostModel({
        "title_post": title_post,  
        "body_post": body_post,
        "thumb_image": image,
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
    PostModel.find()
    .then(result => { 
        res.json({ 
                "status": 200, 
                "message": "Successfully get data", 
                "data" : result
        }) 
    })
    .catch(err => {
        next(err)
    }) 
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