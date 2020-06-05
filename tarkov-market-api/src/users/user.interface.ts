import { Document } from 'mongoose';

export interface User extends Document {
  readonly userId: Number;
  readonly username: string;
  readonly password: string;
}
