import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { authservice } from './auth/auth.service';
import { UserEntity } from './users.entity';
import { NotFoundException } from '@nestjs/common';
describe('UsersController', () => {
  let controller: UsersController;
  let fakeuserservice:Partial<UserService>;
  let fakeauthservice:Partial<authservice>

  beforeEach(async () => {
    fakeuserservice={
      findOne: (id: number) => {
        return Promise.resolve({id,email:'a@a.com',password:'55'} as UserEntity);
      },
      find: (email:string) => {
        return Promise.resolve([{id:1,email,password:'55'} as UserEntity]);
      }
    };
    fakeauthservice={
      signIn: (email: string, password: string) => {
        return Promise.resolve({ id: 1, email, password } as UserEntity);
      }
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers:[
        {
          provide:UserService,
          useValue:fakeuserservice,
        },
        {
          provide:authservice,
          useValue:fakeauthservice,
        }
      ]
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('sigin and returns the user',async()=>{
      const user = await controller.signuser(
        { email: 'a@a.com', password: '55' }                                        
      );
      expect(user.id).toEqual(1);
    });
    

    it('findUser returns a user if user with given id ',async()=>{
      const user=await controller.findUser('1');
      expect(user).toBeDefined();
      });

      it('findUser throws an error if user with given id is not found', async () => {
        fakeuserservice.findOne = () => null;       
        await expect(controller.findUser('1')).rejects.toThrow(NotFoundException);
      });

      it('findAllUsers returs list of users with given email', async() => {
        const users= await controller.findAllUsers('a@a.com');
        expect (users.length).toEqual(1); 
        expect (users[0].email).toEqual('a@a.com');   
        });

    })