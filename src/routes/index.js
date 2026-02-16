const express = require('express');
const router = express.Router();

//feature routes

const userRouter = require('./users.routes.js');
const postsRouter = require('./posts.routes.js');


//utility / base routes



router.get('/about', (req, res) => {
    res.send('About page');
});

router.get('/error-test', (req, res , next) => {
    next(new Error('Internal Server error'));
});


//feature routes

router.use('/users', userRouter);
router.use('/posts', postsRouter);

module.exports = router;

    