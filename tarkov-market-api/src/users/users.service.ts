import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.interface';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {

  constructor(
    @Inject('USER_MODEL')
    private userModel : Model<User>
  ) {
  }

  async create (user : UserDto) : Promise<UserDto>{
    this.userModel.create(user);

    return user;
  }

  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({username: username}).exec();
  }
}