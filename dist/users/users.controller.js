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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("./dtos/user.dto");
const userupdate_dto_1 = require("./dtos/userupdate.dto");
const users_service_1 = require("./users.service");
const auth_guards_1 = require("./guards/auth.guards");
const signin_dto_1 = require("./dtos/signin.dto");
const auth_service_1 = require("./auth/auth.service");
const common_2 = require("@nestjs/common");
let UsersController = class UsersController {
    constructor(userService, auths) {
        this.userService = userService;
        this.auths = auths;
    }
    async createUser(body) {
        const users = await this.userService.find(body.email);
        if (users.length) {
            throw new common_2.BadRequestException;
        }
        return this.userService.create(body.email, body.password);
    }
    async signuser(body) {
        const user = await this.auths.signIn(body.email, body.password);
        console.log("please do sign out before leaving");
        return user;
    }
    signOut() {
        return "successfully signed out the recent signed in user.";
    }
    findUser(id) {
        return this.userService.findOne(parseInt(id));
    }
    findAllUsers(email) {
        return this.userService.find(email);
    }
    removeUser(id) {
        return this.userService.remove(parseInt(id));
    }
    updateUser(id, body) {
        return this.userService.update(parseInt(id), body);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_dto_1.signinDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signuser", null);
__decorate([
    (0, common_1.Post)('/signout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "signOut", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.UseGuards)(auth_guards_1.authguard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findUser", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guards_1.authguard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAllUsers", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.UseGuards)(auth_guards_1.authguard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "removeUser", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, common_1.UseGuards)(auth_guards_1.authguard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, userupdate_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UserService,
        auth_service_1.authservice])
], UsersController);
//# sourceMappingURL=users.controller.js.map