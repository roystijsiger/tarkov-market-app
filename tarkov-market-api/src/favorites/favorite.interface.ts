import { Document } from 'mongoose';

export interface Favorite extends Document {
  readonly userId: string;
  readonly item: string;
}
