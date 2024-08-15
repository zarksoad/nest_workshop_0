import {
  Controller,
  Post,
  Body,
  Get,
  Inject,
  Patch,
  Param,
  UsePipes,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { LoansService } from './loans.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { Loan } from './entity/loan.entity';
import { UptadateLoanDto } from './dto/update-loan.dto';

@Controller('loans')
export class LoansController {
  constructor(@Inject(LoansService) private loansService: LoansService) {}

  @Post()
  create(@Body() createLoanDto: CreateLoanDto): Promise<Loan> {
    return this.loansService.create(createLoanDto);
  }

  @Get()
  findAll(): Promise<Loan[]> {
    return this.loansService.findAll();
  }
  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(
    @Param('id') id: number,
    @Body() updateLoan: UptadateLoanDto,
  ): Promise<Loan> {
    return this.loansService.update(id, updateLoan);
  }
  @Delete('id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  remove(@Param('id') id: number) {
    return this.loansService.remove(id);
  }
}
