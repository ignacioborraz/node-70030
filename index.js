import express from "express";
import args from "./src/utils/args.util.js";
import indexRouter from "./src/routers/index.router.js";
import dbConnect from "./src/utils/db.util.js";
import morgan from "morgan";

const server = express();
const port = args.p;
const mode = args.mode;
const ready = () => {
    console.log("server ready on port " + port + " on " + mode);
    dbConnect()
}
server.listen(port, ready);

// middlewares
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(morgan("dev"))

// routers
server.use("/api", indexRouter);