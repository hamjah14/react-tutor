const express = require('express')
const router = express.Router()
 
// controller
const post = require('../../controllers/postController')

// get product list
router.post('/post', post.createPost)
router.get('/post', post.getPost)
router.put('/post/1', post.updatePost)
router.delete('/post/1', post.deletePost)

module.exports = router