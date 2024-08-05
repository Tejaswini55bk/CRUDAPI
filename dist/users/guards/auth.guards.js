"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authguard = void 0;
class authguard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return true;
    }
}
exports.authguard = authguard;
//# sourceMappingURL=auth.guards.js.map