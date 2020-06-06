import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  userId: String,
  username: String,
  password: String
});