"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authservice = void 0;
const users_service_1 = require("../users.service");
const common_1 = require("@nestjs/common");
let authservice = class authservice {
    constructor(auth) {
        this.auth = auth;
    }
    async signIn(email, password) {
        console.log('hiii');
        const [use] = await this.auth.find(email);
        if (!use) {
            throw new Error("you are not a registered user");
        }
        else if (use.password !== password) {
            throw new Error("you have provided an incorrect password");
        }
        else {
            return use;
        }
    }
};
exports.authservice = authservice;
exports.authservice = authservice = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UserService])
], authservice);
//# sourceMappingURL=auth.service.js.map