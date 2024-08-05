import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private repos: Repository<UserEntity>) {}

  create(email: string, password: string) {
    console.log('insertingggg going onnn')
    //const user = this.repo.create({ email, password });
    //const res = this.repo.insert(Object.assign(new User(), { email, password }))
    const res = this.repos.save(Object.assign(new UserEntity(), { email, password }))

    console.log('inserted')
    return res
    
  }

  findOne(id: number) {
    const res= this.repos.findOneBy({ id });
    return res;
  }

  find(email: string) {
    const res=this.repos.find({ where: { email } });
    return res;
  }

  async update(id: number, attrs: Partial<UserEntity>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('user not found');
    }
    user.updation=true;
    Object.assign(user, attrs);
    
    const res= this.repos.save(user);
    return res;
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('user not found');
    }
  const res= this.repos.remove(user);
  return res;
  }
}
