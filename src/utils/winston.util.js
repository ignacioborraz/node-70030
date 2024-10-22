import { createLogger, format, addColors, transports } from "winston";
const { colorize, simple } = format
const { Console, File } = transports

const levels = { fatal: 0, error: 1, info: 2, http_api: 3 }
const colors = { fatal: "red", error: "yellow", info: "blue", http_api: "white" }
addColors(colors)

const winstonLogger = createLogger({
    levels,
    format: colorize(),
    transports: [
        // primer nivel de registro http_api en consola
        new Console({ level: "http_api", format: simple() }),
        // segundo nivel de registro ERROR en archivo (y tambien de forma automatica en consola)
        new File({ level: "error", format: simple(), filename: "./src/utils/errors/errors.log" })
    ]
})

export default winstonLogger

// A PARTIR DE AHORA NO SE USA MAS EL CONSOLE.LOG
// A PARTIR DE AHORA SE USA WINSTON.NIVELQUECORRESPONDA(LO QUE QUIERO REGISTRAR)