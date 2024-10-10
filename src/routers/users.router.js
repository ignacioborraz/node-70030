import { Router } from "express";
import { create, createMock, createMocks } from "../controllers/users.controller.js";

const usersRouter = Router()

usersRouter.post("/", create)
usersRouter.get("/mocks", createMock)
usersRouter.get("/mocks/:quantity", createMocks)

export default usersRouter