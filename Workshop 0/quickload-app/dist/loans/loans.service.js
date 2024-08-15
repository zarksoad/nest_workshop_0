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
exports.LoansService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const loan_entity_1 = require("./entity/loan.entity");
const typeorm_2 = require("typeorm");
let LoansService = class LoansService {
    constructor(loansRepositoy) {
        this.loansRepositoy = loansRepositoy;
    }
    async create(createLoanDto) {
        const loan = this.loansRepositoy.create(createLoanDto);
        return await this.loansRepositoy.save(loan);
    }
    async findAll() {
        return this.loansRepositoy.find();
    }
    async update(id, updateLoan) {
        const loan = await this.loansRepositoy.preload({
            id: id,
            ...updateLoan,
        });
        if (!loan) {
            throw new common_1.NotFoundException(`Loan with Id ${id} not found`);
        }
        return this.loansRepositoy.save(loan);
    }
    async remove(id) {
        const loan = await this.loansRepositoy.findOne({ where: { id } });
        if (!loan) {
            throw new common_1.NotFoundException(`The loanwith id ${id} not found `);
        }
        await this.loansRepositoy.remove(loan);
    }
    calculateLoanRisk(userProfile) {
        if (userProfile.creditScore > 700) {
            return 'Low Risk';
        }
        else {
            return 'High Risk';
        }
    }
};
exports.LoansService = LoansService;
exports.LoansService = LoansService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(loan_entity_1.Loan)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LoansService);
//# sourceMappingURL=loans.service.js.map