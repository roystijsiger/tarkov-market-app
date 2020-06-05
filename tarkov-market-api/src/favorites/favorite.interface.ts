import { Document } from 'mongoose';

export interface Favorite extends Document {
  readonly userId: Number;
  readonly item: string;
}
