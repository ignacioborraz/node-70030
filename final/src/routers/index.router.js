import { Router } from "express";
import productsRouter from "./products.router.js";

const indexRouter = Router();

indexRouter.use("/products", productsRouter);

export default indexRouter;
