import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';
export declare class UserService {
    private repos;
    constructor(repos: Repository<UserEntity>);
    create(email: string, password: string): Promise<UserEntity & {
        email: string;
        password: string;
    }>;
    findOne(id: number): Promise<UserEntity>;
    find(email: string): Promise<UserEntity[]>;
    update(id: number, attrs: Partial<UserEntity>): Promise<UserEntity>;
    remove(id: number): Promise<UserEntity>;
}
