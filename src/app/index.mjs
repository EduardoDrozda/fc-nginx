import '../config/enviroments.mjs'
import '../database/index.mjs'

import express from "express";

import enviroments from "../config/enviroments.mjs";
import routes from "../routes.mjs";

export default class Application {
  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }

  startup() {
    const { APP_PORT } = enviroments;
    
    this.app.listen(APP_PORT, () =>
      console.log(
        `⚡️ [server]: Server is running at https://localhost:${APP_PORT} ⚡️`
      )
    );
  }
}
