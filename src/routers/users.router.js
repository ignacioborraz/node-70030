import { Router } from "express";
import { create, createMock, createMocks, update, destroy, read, readAll } from "../controllers/users.controller.js";

const usersRouter = Router()

usersRouter.post("/", create)
usersRouter.get("/mocks", createMock)
usersRouter.get("/mocks/:quantity", createMocks)
usersRouter.get("/", readAll)
usersRouter.get("/:uid", read)
usersRouter.put("/:uid", update)
usersRouter.delete("/:uid", destroy)

export default usersRouter