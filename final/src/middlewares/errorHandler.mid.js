export default function errorHandler(error, req, res, next) {
  try {
    const message = error.message || "FATAL ERROR";
    const endpoint = `${req.method} ${req.url}`;
    const statusCode = error.statusCode || 500;
    return res.status(statusCode).json({ message, endpoint });
  } catch (error) {
    return res.status(500).json({ message: "FATAL ERROR" });
  }
}
