import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    name: 'email',
    description: 'Email',
    example: "roy@delcom.nl"

  })
  public username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: "password",
    description: 'Password',
    example: "changeme"
  })
  public password: string;
}