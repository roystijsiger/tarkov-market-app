import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'roy@delcom.nl',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'eva@delcom.nl',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'stijn@delcom.nl',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}