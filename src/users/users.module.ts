import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { UserEntity } from './users.entity';
import { authservice } from './auth/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UserService,authservice],
})
export class UsersModule {}