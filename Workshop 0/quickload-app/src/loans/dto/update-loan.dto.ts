import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class UptadateLoanDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  currency: string;
}
