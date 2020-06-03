import * as mongoose from 'mongoose';

export const FavoriteSchema = new mongoose.Schema({
  email: String,
  item: String
});