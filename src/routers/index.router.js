import { Router } from "express";
import { fork } from "child_process"
import { sumar } from "calculator-70030";
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
indexRouter.get("/sumar/:n1/:n2", (req, res, next)=> {
  try {
    const { n1, n2 } = req.params
    const total = sumar(n1,n2)
    return res.status(200).json({ response: total })
  } catch (error) {
    return next(error)
  }
})
indexRouter.get("/simplex", (req, res) => {
  return res.status(200).json({ message: "OK" });
});
indexRouter.get("/complex", (req, res) => {
  let total = 1;
  for (let i = 1; i < 1000000000; i++) {
    total = i * i;
  }
  return res.status(200).json({ total });
});
indexRouter.use("/users", usersRouter)

export default indexRouter;
