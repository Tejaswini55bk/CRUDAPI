import {
    CanActivate,
    ExecutionContext
} from '@nestjs/common';

export class authguard implements CanActivate {
    canActivate(context: ExecutionContext){
        const request= context.switchToHttp().getRequest();
        return true;
    }   
}