import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../users/user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService : UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(user : UserDto): Promise<any> {
    const userFound = await (await this.usersService.findOne(user.username)).toObject();
    if (userFound && user.password === userFound.password) {
      const { password, ...result } = userFound;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { userId: user._id, username: user.username };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}