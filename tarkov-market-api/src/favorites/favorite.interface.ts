import { Document } from 'mongoose';

export interface Favorite extends Document {
  readonly name: string;
  readonly item: string;
}
