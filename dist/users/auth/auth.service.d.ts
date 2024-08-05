import { UserService } from "../users.service";
export declare class authservice {
    private auth;
    constructor(auth: UserService);
    signIn(email: string, password: string): Promise<import("../users.entity").UserEntity>;
}
