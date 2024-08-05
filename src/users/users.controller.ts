import {
    Body,
    Controller,
    Post,
    Get,
    Patch,
    Delete,
    Param,
    Query,
    ClassSerializerInterceptor,
    UseInterceptors,
    UseGuards
  } from '@nestjs/common';
  import { CreateUserDto } from './dtos/user.dto';
  import { UpdateUserDto } from './dtos/userupdate.dto';
  import { UserService } from './users.service';
import { authguard } from './guards/auth.guards';
import { signinDto } from './dtos/signin.dto';
import { authservice } from './auth/auth.service';
import { BadRequestException } from '@nestjs/common';
  
  @Controller('users')
  export class UsersController {
    constructor(private userService: UserService,
                private auths:authservice
    ) {}
  
    @Post('/signup')
    async createUser(@Body() body: CreateUserDto) {
        const users=await this.userService.find(body.email);
    if(users.length){        //if user already exists
      throw new BadRequestException;
  }
      return this.userService.create(body.email, body.password);
    }

    @Post('signin')
    async signuser(@Body() body:signinDto){
        const user= await this.auths.signIn(body.email,body.password);
        console.log("please do sign out before leaving");
        return user;

    }

    @Post('/signout')
    signOut(){
         return "successfully signed out the recent signed in user."
    }
  
    @Get('/:id')
    @UseGuards(authguard)
    @UseInterceptors(ClassSerializerInterceptor)//to hide password
    findUser(@Param('id') id: string) {
      return this.userService.findOne(parseInt(id));
    }
  
    @Get()
    @UseGuards(authguard)
    @UseInterceptors(ClassSerializerInterceptor)
    findAllUsers(@Query('email') email: string) {
      return this.userService.find(email);
    }
  
    @Delete('/:id')
    @UseGuards(authguard)
    @UseInterceptors(ClassSerializerInterceptor)
    removeUser(@Param('id') id: string) {
      return this.userService.remove(parseInt(id));
    }
  
    @Patch('/:id')
    @UseGuards(authguard)
    @UseInterceptors(ClassSerializerInterceptor)
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
      return this.userService.update(parseInt(id), body);
    }
  }