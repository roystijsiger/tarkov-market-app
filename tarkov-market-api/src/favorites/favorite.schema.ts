import * as mongoose from 'mongoose';

export const FavoriteSchema = new mongoose.Schema({
  userId: String,
  item: String
});