import { CreateUserDto } from './dtos/user.dto';
import { UpdateUserDto } from './dtos/userupdate.dto';
import { UserService } from './users.service';
import { signinDto } from './dtos/signin.dto';
import { authservice } from './auth/auth.service';
export declare class UsersController {
    private userService;
    private auths;
    constructor(userService: UserService, auths: authservice);
    createUser(body: CreateUserDto): Promise<import("./users.entity").UserEntity & {
        email: string;
        password: string;
    }>;
    signuser(body: signinDto): Promise<import("./users.entity").UserEntity>;
    signOut(): string;
    findUser(id: string): Promise<import("./users.entity").UserEntity>;
    findAllUsers(email: string): Promise<import("./users.entity").UserEntity[]>;
    removeUser(id: string): Promise<import("./users.entity").UserEntity>;
    updateUser(id: string, body: UpdateUserDto): Promise<import("./users.entity").UserEntity>;
}
