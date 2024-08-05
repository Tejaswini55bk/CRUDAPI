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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const users_entity_1 = require("./users.entity");
let UserService = class UserService {
    constructor(repos) {
        this.repos = repos;
    }
    create(email, password) {
        console.log('insertingggg going onnn');
        const res = this.repos.save(Object.assign(new users_entity_1.UserEntity(), { email, password }));
        console.log('inserted');
        return res;
    }
    findOne(id) {
        const res = this.repos.findOneBy({ id });
        return res;
    }
    find(email) {
        const res = this.repos.find({ where: { email } });
        return res;
    }
    async update(id, attrs) {
        const user = await this.findOne(id);
        if (!user) {
            throw new Error('user not found');
        }
        user.updation = true;
        Object.assign(user, attrs);
        const res = this.repos.save(user);
        return res;
    }
    async remove(id) {
        const user = await this.findOne(id);
        if (!user) {
            throw new Error('user not found');
        }
        const res = this.repos.remove(user);
        return res;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(users_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
//# sourceMappingURL=users.service.js.map