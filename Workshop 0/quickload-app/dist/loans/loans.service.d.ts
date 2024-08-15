import { Loan } from './entity/loan.entity';
import { CreateLoanDto } from './dto/create-loan.dto';
import { Repository } from 'typeorm';
import { UptadateLoanDto } from './dto/update-loan.dto';
export declare class LoansService {
    private loansRepositoy;
    constructor(loansRepositoy: Repository<Loan>);
    create(createLoanDto: CreateLoanDto): Promise<Loan>;
    findAll(): Promise<Loan[]>;
    update(id: number, updateLoan: UptadateLoanDto): Promise<Loan>;
    remove(id: number): Promise<void>;
    calculateLoanRisk(userProfile: any): string;
}
