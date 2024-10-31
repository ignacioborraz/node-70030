import "dotenv/config.js"
import express from "express";
import morgan from "morgan";
import cluster from "cluster";
import { cpus } from "os";
import { connect } from "mongoose";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import Product from "./src/dao/product.model.js";

// server
const server = express();
const port = process.env.PORT || 8080
const ready = async () => {
  try {
    console.log("server ready on port " + port);
    await connect(process.env.MONGO_URI);
    console.log("PID: " + process.pid + " connected to mongo");  
  } catch (error) {
    console.log(error);    
  }  
};

// cluster
const isPrimary = cluster.isPrimary;
if (isPrimary) {
  const numb = cpus().length;
  for (let i = 1; i < numb; i++) {
    cluster.fork();
  }
} else {
  server.listen(port, ready);
}

// middlewares
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(morgan("dev"))

// routers
server.post("/api/products", async (req, res, next) => {
  try {
    const data = req.body
    const response = await Product.create(data)
    return res.status(201).json({ response })
  } catch (error) {
    return next(error)
  }
});
server.get("/api/products", async(req, res, next) => {
  try {
    const response = await Product.find()
    return res.status(200).json({ response })
  } catch (error) {
    return next(error)
  }
});
server.use(errorHandler);
