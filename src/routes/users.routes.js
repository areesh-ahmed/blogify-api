// src/routes/users.routes.js

const express = require('express');
const router = express.Router();

const {body} = require('express-validator');


// POST /api/v1/users/register  
const userController = require('../controllers/users.controller');
router.use((req, res, next) => {
    console.log(`User route accessed: ${req.method} ${req.url}`);
    next();
});

const registerValidationRules = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address.'),    
  body('password')
    .isLength({min: 6})
    .withMessage('Password must be at least 6 characters long.')      
];

router.post('/register', registerValidationRules, userController.registerUser);

module.exports = router;