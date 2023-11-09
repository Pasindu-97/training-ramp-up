import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as UserController from "../controllers/user.controllers";

export const userRouter = express.Router();

userRouter.get("/", UserController.getUsers);

userRouter.get("/:id", UserController.getUser);

userRouter.post(
  "/",
  body("username").isString(),
  body("email").isString(),
  body("password").isString(),
  body("role").isString(),
  UserController.createUser
);

userRouter.put(
  "/:id",
  body("username").isString(),
  body("email").isString(),
  body("password").isString(),
  body("role").isString(),
  UserController.updateUser
);

userRouter.delete("/:id", UserController.deleteUser);