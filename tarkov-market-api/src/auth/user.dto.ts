import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @IsString()
  @ApiProperty({
    name: 'email',
    description: 'Email',
    example: "roy@delcom.nl"

  })
  public username: string;

  @IsString()
  @ApiProperty({
    name: "password",
    description: 'Password',
    example: "changeme"
  })
  public password: string;
}