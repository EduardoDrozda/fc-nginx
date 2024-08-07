const express = require("express");

const { application } = require("./config/enviroments");

const api = require("./routes");

class Application {
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
        this.app.use("/api", api);
    }

    startup() {
        const { port } = application;
        this.app.listen(port, () =>
            console.log(`Application running on port ${port}`)
        );
    }
}

module.exports = Application;
