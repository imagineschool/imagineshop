import Mongoose from '../../db.js';

const userSchema = new Mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  }, 
  {
    collection: 'users',
    timestamps: true
  }
);

export default Mongoose.model('users', userSchema, 'users');