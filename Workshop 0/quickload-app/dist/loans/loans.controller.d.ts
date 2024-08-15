import { LoansService } from './loans.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { Loan } from './entity/loan.entity';
import { UptadateLoanDto } from './dto/update-loan.dto';
export declare class LoansController {
    private loansService;
    constructor(loansService: LoansService);
    create(createLoanDto: CreateLoanDto): Promise<Loan>;
    findAll(): Promise<Loan[]>;
    update(id: number, updateLoan: UptadateLoanDto): Promise<Loan>;
    remove(id: number): Promise<void>;
}
