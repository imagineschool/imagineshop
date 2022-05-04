import { ObjectId } from 'mongodb';
import UserModel from '../schema/user-schema.js';

export class UserService {

  constructor() { }

  async create(user) {
    await UserModel.create(user);
  }

  async findAll() {
    return await UserModel.find({});
  }

  async findById(id) {
    return await UserModel.findById(ObjectId(id));
  }

  async delete(id) {
    await UserModel.deleteOne({ _id: ObjectId(id) });
  }

  async update(id, user) {
    return await UserModel.updateOne({ _id: ObjectId(id) }, user);
  }

  async findByEmail(email) {
    return await UserModel.findOne({ email });
  }

  async login(email, password) {
    if (email, password) {
      const user = await this.findByEmail(email);
      if (user) {
        const auth = user.password === password;
        if (auth) {
          return user;
        }
        return null;
      }
      return null;
    }
    return null;
  }
}