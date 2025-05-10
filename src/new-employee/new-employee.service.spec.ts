import { Test, TestingModule } from '@nestjs/testing';
import { NewEmployeeService } from './new-employee.service';

describe('NewEmployeeService', () => {
  let service: NewEmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewEmployeeService],
    }).compile();

    service = module.get<NewEmployeeService>(NewEmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
