import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserEntity } from './users/users.entity';
//import { ClassSerializerInterceptor } from '@nestjs/common';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:"localhost",
      port:5432,
      username:"postgres",
      password:"post16",
      database: 'postgres',
      entities: [UserEntity],
      schema:'DBO',
      synchronize: true,
    }),
    UsersModule,
    
  ],
  controllers: [AppController],
  providers: [AppService,
    //{useclass:ClassSerializerInterceptor}
  ],
})
export class AppModule {}
