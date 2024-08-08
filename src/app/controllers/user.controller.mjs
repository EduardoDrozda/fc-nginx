import { faker } from "@faker-js/faker";
import { UserRepository } from "../repositories/user.repository.mjs";
import UserService from "../services/user.service.mjs";

class UserController {
  constructor({ userService }) {
    this.userService = userService;
    this.create = this.create.bind(this);
  }

  async create(_, res) {
    const name = faker.person.fullName();

    try {
      const users = await this.userService.create({ name });

      let table = "<table>";
      table += "<tr><th>#</th><th>Name</th></tr>";

      for (let people of users) {
        table += `<tr><td>${people.id}</td><td>${people.name}</td></tr>`;
      }

      table += "</table>";
      res.send("<h1>Full Cycle Rocks!</h1>" + table);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

const userRepository = new UserRepository();
const userService = new UserService({ userRepository });
const userController = new UserController({ userService });

export default userController;
