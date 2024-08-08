export default class UserService {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async create({ name }) {
    await this.userRepository.create({ name });
    return this.getAll();
  }

  async getAll() {
    return this.userRepository.getAll();
  }
}
