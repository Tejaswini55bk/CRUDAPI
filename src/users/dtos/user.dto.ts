import { IsBoolean, IsEmail, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  updation:boolean;

}
