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
}