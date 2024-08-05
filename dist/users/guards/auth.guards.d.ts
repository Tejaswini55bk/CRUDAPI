import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class authguard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
