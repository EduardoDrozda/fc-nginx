import connection from "../../database/index.mjs";

export class UserRepository {
  constructor() {
    this.tableName = "users";
  }

  async create({ name }) {
    const query = `INSERT INTO ${this.tableName} (name) VALUES ('${name}')`;

    return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        }

        resolve(results);
      });
    });
  }

  async getAll() {
    const query = `SELECT * FROM ${this.tableName}`;

    return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        }

        resolve(results);
      });
    });
  }
}
