import { Router } from "express";
import { createController, destroyOneController, readController, readOneController, updateOneController } from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post("/", createController);
productsRouter.get("/", readController);
productsRouter.get("/:pid", readOneController);
productsRouter.put("/:pid", updateOneController);
productsRouter.delete("/:pid", destroyOneController);

export default productsRouter;
