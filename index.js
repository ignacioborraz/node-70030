import express from "express";
//import morgan from "morgan";
import compression from "express-compression";
import cluster from "cluster";
import { cpus } from "os";
import swaggerJsdoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import opts from "./src/utils/swagger.util.js"
import args from "./src/utils/args.util.js";
import indexRouter from "./src/routers/index.router.js";
import dbConnect from "./src/utils/db.util.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import winston from "./src/middlewares/winstonLogger.mid.js";

const server = express();
const port = args.p;
const mode = args.mode;
const ready = () => {
  console.log("server ready on port " + port + " on " + mode + " to PID: "+process.pid);
  dbConnect();
};

const isPrimary = cluster.isPrimary;
if (isPrimary) {
  console.log("IS PRIMARY: "+isPrimary);
  console.log("PROCESS ID: " + process.pid);
  const numb = cpus().length
  //console.log(numb);
  for (let i=1; i<numb; i++) {
    cluster.fork()
  }
  // al forkear se crea un worker EXACTAMENTE igual al primario
  // incluso en el mismo puerto (por eso se rompia!!!)
  // si yo levanto el servidor en el proceso principal
  // el servidor SOLO escucha al proceso principal
  // server.listen(port, ready);
} else {
  // no quiero que el proceso primario sea el unico nodo "servidor" de mi aplicacion
  // si no que quiero que cada uno de los workers funcione como nodo
  // entonces levanto cada "miniservidor" / nodo en cada worker
  // si en cambio CADA NODO levanta el servidor
  // ahora cada nodo escucha las solicitudes HTTP
  server.listen(port, ready);
}

// middlewares
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
// server.use(morgan("dev"))
server.use(winston);
server.use(
  compression({
    brotli: { enabled: true, zlib: {} },
  })
);

// documentation
const specs = swaggerJsdoc(opts)
server.use("/api/doc", serve, setup(specs))

// routers
server.use("/api", indexRouter);
server.use(errorHandler);
