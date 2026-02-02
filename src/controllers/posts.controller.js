const getPostById = (req, res) => {
  const postId = req.params.postId;

  res.status(200).json({
    message: `You requested post with ID: ${postId}`
  });
};

module.exports = {
  getAllPosts,
  getPostById,
};
