import "dotenv/config.js";
import express from "express";
import dbConnect from "./src/utils/dbConnect.util.js";
import morgan from "morgan";
import { serve, setup } from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import opts from "./src/utils/swaggerOpts.util.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import indexRouter from "./src/routers/index.router.js";

// servidor
const server = express();
const port = process.env.PORT || 8080;
const ready = () => {
  console.log("server ready on port " + port);
  dbConnect();
};
server.listen(port, ready)

// middlewares a nivel de servidor
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(morgan("dev"))

// documentacion
const specs = swaggerJSDoc(opts)
server.use("/api/docs", serve, setup(specs))

// enrutadores
server.use("/api", indexRouter)
server.use(errorHandler)