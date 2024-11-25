const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const upload = require('../config/multer');
const postController = require("../constroller/postController");
  
// create product
router.post("/post", upload.single('image'), [ 
    body("title_post").notEmpty().withMessage("Post title is empty"),
    body("body_post").notEmpty().withMessage("Post title is empty"),
    body("body_post").isLength({min: 5}).withMessage("Post body minimal 5 character"), 
], postController.createPost); 

// get product list
router.get("/post", postController.getPosts);
router.get("/post/:postId", postController.getPostById); 
// router.get("/post?page=5&limit=5", post.getPost);

// update product
router.put("/post/:postId", upload.single('image'), [ 
    body("title_post").notEmpty().withMessage("Post title is empty"),
    body("body_post").notEmpty().withMessage("Post title is empty"),
    body("body_post").isLength({min: 5}).withMessage("Post body minimal 5 character"), 
], postController.updatePost);

// delete product
router.delete("/post/:postId", postController.deletePost);

module.exports = router
