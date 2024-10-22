import errors from "../utils/errors/errors.js";
import winstonLogger from "../utils/winston.util.js";

function errorHandler(error, req, res, next) {
    const message = `${req.method} ${req.url} - ${error.message.toUpperCase()}`
    if (error.statusCode) {
        winstonLogger.error(message)
    } else {
        winstonLogger.fatal(message)
        console.log(error);
    }
    const { fatal } = errors
    return res
        .status(error.statusCode || fatal.statusCode)
        .json({ message: error.message || fatal.message })
}

export default errorHandler