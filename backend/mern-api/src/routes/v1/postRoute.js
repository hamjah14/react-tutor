const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

// controller
const post = require("../../controllers/postController");

// get product list
router.post("/post", [ 
        body("title_post").notEmpty().withMessage("Post title is empty"),
        body("body_post").notEmpty().withMessage("Post title is empty"),
        body("body_post").isLength({min: 5}).withMessage("Post body minimal 5 character"), 
    ], post.createPost);

router.get("/post", post.getPost);
router.get("/post/:postId", post.getPostById);

router.put("/post/1", post.updatePost);
router.delete("/post/1", post.deletePost);

module.exports = router