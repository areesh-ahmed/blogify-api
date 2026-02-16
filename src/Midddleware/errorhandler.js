const errorHandler = (err, req, res, next) => {
  // 1. Log the error for the developer (on the server console)
  console.error(err.stack); // Shows the full error details

  // 2. Send a clean, generic JSON response to the client
  res.status(500).json({
    success: false,
    error: 'Internal Server Error' 
  });
};

// Mount it at the very end of the file
module.exports= errorHandler;