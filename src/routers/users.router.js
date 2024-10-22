import { Router } from "express";
import { create, createMock, createMocks, destroy, read, readAll } from "../controllers/users.controller.js";

const usersRouter = Router()

usersRouter.post("/", create)
usersRouter.get("/mocks", createMock)
usersRouter.get("/mocks/:quantity", createMocks)
usersRouter.get("/", readAll)
usersRouter.get("/:uid", read)
usersRouter.delete("/:uid", destroy)

export default usersRouter