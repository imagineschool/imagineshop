import UserModel from '../schema/user-schema.js';

export class UserService {
  
  constructor() {}

  async add(user) {
    await UserModel.create(user);
  }
}