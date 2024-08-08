import express from "express";
import userController from "./app/controllers/user.controller.mjs";

const routes = express.Router();

routes.get("/", userController.create);

export default routes;
