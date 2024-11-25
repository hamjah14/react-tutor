const { validationResult } = require("express-validator"); 
const PostModel = require("../model/postModel");
const path = require("path");
const fs = require("fs");

const createPost = async (req, res, next) => { 
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
    let image = req.file.path.replace("public\\images\\", ""); 
    image = image.replace("\\", "/"); 

    const post = { 
        "title_post": title_post,  
        "body_post": body_post,
        "thumb_image": image,
        "author_id": user_id,
        "author_name": name
    };
 
    try {
        await PostModel.createPost(post);
        res.status(201).json({  
            "message": "Successfully created data", 
            "data": req.body, 
        });
    } catch (err) {
        res.status(500).json(err);
    }
    
    next();
}

const getPosts = async (req, res, next) => { 
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;
    let totalData = 0; 

    try { 
        const [data, totalData] = await Promise.all([PostModel.getPosts(page, limit), PostModel.getTotalPost()]);   
 
        res.status(200).json({  
            "message": "Successfully get data", 
            "data": data[0],
            "total_data": totalData[0][0].total,
            "page": page,
            "limit": limit,
        });
    } catch (err) {
        res.status(500).json(err);
    }
    
    next();
}

const getPostById = async (req, res, next) => {   
    try { 
        const postId = req.params.postId;
        const [data] = await PostModel.getPostById(postId);
        res.status(200).json({  
            "message": "Successfully get data", 
            "data": data[0], 
        });
    } catch (err) {
        res.status(500).json(err);
    }
    
    next();
}

const updatePost = async (req, res, next) => {  
    const postId = req.params.postId;
    const errors = validationResult(req);

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
    let image = req.file.path.replace("public\\images\\", ""); 
    image = image.replace("\\", "/"); 

    const post = { 
        "title_post": title_post,  
        "body_post": body_post,
        "thumb_image": image,
        "author_id": user_id,
        "author_name": name
    };
 
    try {
        await PostModel.updatePost(postId, post);
        res.status(201).json({  
            "message": "Successfully updated data",  
            "data": req.body, 
        });
    } catch (err) {
        res.status(500).json(err);
    }
    
    next();
}

const deletePost = async (req, res, next) => {
    const postId = req.params.postId;
 
    try {   
        const [resGet, resDelete] = await Promise.all([PostModel.getPostById(postId), PostModel.deletePost(postId)]);    
        
        if(resDelete[0].affectedRows > 0){        
            removeImage(resGet[0][0].thumb_image); 

            res.status(200).json({  
                "message": "Successfully deleted data",  
            }); 
             
        } else {  
            res.status(500).json({  
                "message": "Failed to delete data",  
            });
        }
    } catch (err) {
        res.status(500).json(err);
    }
    
    next();     
}

const removeImage = (postId) => {   
    filePath =  path.join(__dirname, "../../public/images", postId);  
    fs.unlink(filePath, (err) => {
        if (err) {
            // throw err;
            console.log(err);
            // return "Failed to delete images in directrory";
        } 
    });
}

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost }