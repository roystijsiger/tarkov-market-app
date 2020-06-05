import { Body, Controller, Get, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './user.dto';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService : AuthService) {}

  @Post('login')
  @ApiOkResponse({
    status: 200, description: 'Successfully logged in'
  })

  @ApiUnauthorizedResponse({status: 401, description: 'login failed'})
  async login(@Body() user : UserDto) : Promise<any>{
    const userFound = await this.authService.validateUser(user);
    if(userFound){
      return this.authService.login(user);
    }
    return new UnauthorizedException();
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  getProfile(@Request() req){
    return req.user;
   }
}