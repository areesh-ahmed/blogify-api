const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts.controller.js');

// GET all posts
router.get('/', postController.getAllPosts);

// GET single post by ID
router.get('/:postId', (req, res) => {
  const postId = req.params.postId;
  res.status(200).json({
    message: `You requested post with ID: ${postId}`
  });
});

module.exports = router;
