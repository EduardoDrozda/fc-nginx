import mysql from "mysql";

import enviroments from "../config/enviroments.mjs";

const connection = mysql.createConnection({
  host: enviroments.DB_HOST,
  user: enviroments.DB_USER,
  password: enviroments.DB_PASS,
  database: enviroments.DB_NAME,
});


export default connection;