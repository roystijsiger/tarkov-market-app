import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy} from './jwt.strategy';
//import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import {userProviders } from 'src/users/users.provider'
import { DatabaseModule } from 'src/database/database.module';
@Module({
  imports: [
    //UsersModule,
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtStrategy, UsersService, ...userProviders],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}