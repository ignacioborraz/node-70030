import winstonLogger from "../utils/winston.util.js";

// middleware que reemplazara a morgan
function winston(req, res, next) {
    try {
        // agrego al objeto de requerimientos la configuracion de los registros
        req.logger = winstonLogger
        const message = `${req.method} ${req.url}`
        req.logger.http_api(message)
        return next()
    } catch (error) {
        return next(error)
    }
}

export default winston