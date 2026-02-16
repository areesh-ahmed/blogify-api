const requestLogger = (req, res, next) => {
  console.log(`Request Recived: ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = requestLogger;