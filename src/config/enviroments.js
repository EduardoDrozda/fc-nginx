const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  application: {
    port: process.env.APP_PORT,
  },
};
