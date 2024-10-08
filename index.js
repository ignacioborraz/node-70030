import express from "express";
//import env from "./src/utils/env.util.js";
import args from "./src/utils/args.util.js";
import indexRouter from "./src/routers/index.router.js";

const server = express();
const port = args.p;
const mode = args.mode;
const ready = console.log("server ready on port " + port + " on " + mode);
server.listen(port, ready);
server.use("/api", indexRouter);

//console.log("ARGV devuelve un array con los argumentos del comando");
// si el argumento es una palabra debe ingresarse con --
// ejemplo: --port
// si el argumento es un abreviado O una letra con -
// ejemplo: -p
//console.log(process.argv);
//console.log(args);
//console.log(env);
//console.log(env.GOOGLE_ID);
