import { UserService } from "../users.service";
import { Injectable } from "@nestjs/common";

@Injectable()

export class authservice{
    constructor(private auth:UserService){}

    async signIn(email:string,password:string){
        console.log('hiii');
        const [use]=await this.auth.find(email);
        if(!use){
            throw new Error("you are not a registered user");
        }
        else if(use.password!==password){
            throw new Error("you have provided an incorrect password");
        }
            else{
        return use;
            }
    }
}