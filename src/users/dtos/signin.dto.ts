import { IsString,IsEmail } from "class-validator";
export class signinDto{
    @IsString()
    password:string;

    @IsEmail()
    email:string;
}