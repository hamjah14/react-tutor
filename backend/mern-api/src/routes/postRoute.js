const express = require('express')
const router = express.Router()
 
// controller
const post = require('../controllers/postController')

// get product list
router.get('/post', post.getPost)

module.exports = router