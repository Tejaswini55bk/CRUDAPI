import { UsersService } from "src/users/users.service";
export declare class AuthService {
    private auth;
    constructor(auth: UsersService);
    signUp(email: string, password: string): Promise<import("../users/users.entity").UserEntity & {
        email: string;
        password: string;
    }>;
}
