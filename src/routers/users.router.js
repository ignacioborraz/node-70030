import { Router } from "express";
import { create, createMock, createMocks, readAll } from "../controllers/users.controller.js";

const usersRouter = Router()

usersRouter.post("/", create)
usersRouter.get("/mocks", createMock)
usersRouter.get("/mocks/:quantity", createMocks)
usersRouter.get("/", readAll)

export default usersRouter