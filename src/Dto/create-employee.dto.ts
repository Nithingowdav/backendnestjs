import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateEmployeeDto {
  @IsString() employeeId: string;
  @IsString() name: string;
  @IsString() email: string;
  @IsString() phoneNumber: string;
  @IsString() salary: string;
  @IsString() fatherName: string;
  @IsString() motherName: string;
  @IsString() casteCertificate: string;
  @IsOptional()
  @IsString()
  position?: string;

  @IsOptional()
  expense: {
    expenseType: string;
    amount: string;
  };

  @IsOptional()
  bankDetails: {
    accountNumber: string;
    ifscCode: string;
    bankName: string;
  };
}
