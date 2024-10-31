function errorHandler(error, req, res, next) {
  const message = `${req.method} ${req.url} - ${error.message?.toUpperCase() || "FATAL ERROR"}`;
  const statusCode = error.statusCode || 500;
  return res.status(statusCode).json({ message });
}

export default errorHandler;
