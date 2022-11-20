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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_dto_1 = require("../dto/user.dto");
const axios_1 = require("@nestjs/axios");
let UserResolver = class UserResolver {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async users() {
        let result = await this.httpService.axiosRef.get('https://node-own.herokuapp.com/users');
        console.log('/*/*/*****************');
        return result.data;
    }
    async resolveReference(reference) {
        console.log('heyy22 +++++++++++++++++++');
        console.log(reference);
        let r = await this.httpService.axiosRef.get('https://node-own.herokuapp.com/users');
        let u = r.data.find((f) => f.id == reference.id);
        console.log(u);
        return u;
    }
    getUser() {
        console.log('i ajddjkewndwj');
        return {
            id: 1,
            username: 'dwdqwdq',
            email: 'dwqkwem#@@N@JNJ',
        };
    }
    async hello() {
        return 'hello';
    }
};
__decorate([
    (0, graphql_1.Query)((returns) => [user_dto_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    (0, graphql_1.ResolveReference)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "resolveReference", null);
__decorate([
    (0, graphql_1.Query)((returns) => user_dto_1.User, { name: 'user' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", user_dto_1.User)
], UserResolver.prototype, "getUser", null);
__decorate([
    (0, graphql_1.Query)((returns) => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "hello", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)((of) => user_dto_1.User),
    __metadata("design:paramtypes", [axios_1.HttpService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map