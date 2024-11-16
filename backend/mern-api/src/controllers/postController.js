const { validationResult } = require("express-validator");
const PostModel = require("../models/postModel");
const path = require("path");
const fs = require("fs");

// Save post into mongodb
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
    let image = req.file.path.replace("assets\\images\\", "") 
    // const date = new Date();
    // const created_at = date.toJSON().slice(0,19).replace("T",":") 

    const posting = new PostModel({
        "_id":null,
        "title_post": title_post,  
        "body_post": body_post,
        "thumb_image": image,
        "author_id": user_id,
        "author_name": name
    });

    posting.save()
    .then( result => {   
        const data = {
            "code":"201",
            "message":"Successfully added data", 
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

// get all data post from mongodb
const getPost = (req, res, next) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;
    let totalData = 0; 

    PostModel.find()
    .countDocuments()
    .then(count => {
        totalData = count;

        return PostModel.find().skip((page - 1) * limit).limit(limit)
    })
    .then(result => {
        res.json({ 
                "status": 200, 
                "message": "Successfully get data", 
                "data" : result,
                "total_data": totalData,
                "page": page,
                "limit": limit,
        }) 
    })
    .catch(err => {
        next(err)
    }) 
}

const getPostById = (req, res, next) => {
    const postId = req.params.postId;
 
    PostModel.findById(postId)
    .then(result => {  

        if(!result) {
            const error = new Error("Data is not available");
            error.errorStatus = 404
            throw error
        }

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
    
    const postId = req.params.postId;
     
    PostModel.findById(postId)
    .then(posting => {  

        if(!posting) {
            const error = new Error("Data is not available for update");
            error.errorStatus = 404
            throw error
        }
 
        const { title_post, body_post, user_id, name } = req.body;
        const image = req.file.path.replace("assets\\images\\", "")

        posting.title_post = title_post;
        posting.body_post = body_post;
        posting.thumb_image = image;  
        posting.author_id= user_id;
        posting.author_name= name;
        
        return posting.save() 
    })
    .then( result => {   
        const data = {
            "code":"201",
            "message":"Successfully updated data", 
        } 

        res.status(201).json(data)
    })
    .catch( err => { 
        res.status(400).json({
            "status":"400",
            "message":"Id Post is not valid"
        }) 
    })
    .catch(err => {
        next(err)
    })  
}
 
const deletePost = (req, res, next) => {
    const postId = req.params.postId;
 
    PostModel.findById(postId)
    .then(post => {   
        if(!post) {
            const error = new Error("Data is not available 1");
            error.errorStatus = 404
            throw error
        }
 
        return PostModel.findByIdAndDelete(postId)
    })
    .then(result => {   
        removeImage(result.thumb_image)

        res.json({ 
            "status": 200, 
            "message": "Successfully deleted data",  
        }) 
    }) 
    .catch( err => { 
        res.status(400).json({
            "status":"400",
            "message":"Id Post is not valid"
        }) 
    })
    .catch(err => {
        next(err)
    }) 
}

const removeImage = (filePath) => {  
    filePath =  path.join(__dirname, "../../assets/images",filePath);
    fs.unlink(filePath, err=> console.log(err));
}

module.exports = { createPost, getPost, getPostById, updatePost, deletePost }