const express = require('express')
const router = express.Router() 
const { body } = require('express-validator')

// controller
const auth = require('../../controllers/authController')

router.post('/register', [
    body('name').notEmpty().withMessage('Name is empty'),
    body('email').notEmpty().withMessage('Email is empty'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').notEmpty().withMessage('Password is empty'),
    body('password').isLength({min: 5}).withMessage('Password minimal 5 character'), 

], auth.register)

router.post('/login', auth.login)
router.post('/logout', auth.logout)

module.exports = router