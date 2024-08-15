import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Loan } from './entity/loan.entity';
import { CreateLoanDto } from './dto/create-loan.dto';
import { Repository } from 'typeorm';
import { UptadateLoanDto } from './dto/update-loan.dto';

@Injectable()
export class LoansService {
  constructor(
    @InjectRepository(Loan) private loansRepositoy: Repository<Loan>,
  ) {}

  async create(createLoanDto: CreateLoanDto): Promise<Loan> {
    const loan = this.loansRepositoy.create(createLoanDto);
    return await this.loansRepositoy.save(loan);
  }

  async findAll(): Promise<Loan[]> {
    return this.loansRepositoy.find();
  }

  async update(id: number, updateLoan: UptadateLoanDto): Promise<Loan> {
    const loan = await this.loansRepositoy.preload({
      id: id,
      ...updateLoan,
    });
    if (!loan) {
      throw new NotFoundException(`Loan with Id ${id} not found`);
    }
    return this.loansRepositoy.save(loan);
  }

  async remove(id: number): Promise<void> {
    const loan = await this.loansRepositoy.findOne({ where: { id } });
    if (!loan) {
      throw new NotFoundException(`The loanwith id ${id} not found `);
    }
    await this.loansRepositoy.remove(loan);
  }

  calculateLoanRisk(userProfile: any): string {
    // Lógica básica para determinar el riesgo
    if (userProfile.creditScore > 700) {
      return 'Low Risk';
    } else {
      return 'High Risk';
    }
  }
}
