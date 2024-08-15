import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateLoanDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  currency: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
