import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from './user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService : UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(user : UserDto): Promise<any> {
    const userFound = await this.usersService.findOne(user.email);
    console.log(userFound);
    if (userFound && user.password === userFound.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}