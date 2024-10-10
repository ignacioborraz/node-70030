import { Router } from "express";
import { fork } from "child_process"
import usersRouter from "./users.router.js";
//import sum from "../utils/sum.util.js";

const indexRouter = Router();

indexRouter.get("/sum", (req, res) => {
  try {
    /* const counter = sum();
    return res.status(200).json({
      response: counter,
    }); */
    const child = fork("./src/utils/sum.util.js");
    // creo un proceso hijo forkeando la ruta del proceso
    child.send("start");
    // inicializo el proceso hijo enviando "start"
    child.on("message", (data) => {
      return res.status(200).json({ response: data });
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});
indexRouter.get("/simplex", (req, res) => {
  return res.status(200).json({ message: "OK " });
});
indexRouter.use("/users", usersRouter)

export default indexRouter;
