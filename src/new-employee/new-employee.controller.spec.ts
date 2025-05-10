import { Test, TestingModule } from '@nestjs/testing';
import { NewEmployeeController } from './new-employee.controller';

describe('NewEmployeeController', () => {
  let controller: NewEmployeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewEmployeeController],
    }).compile();

    controller = module.get<NewEmployeeController>(NewEmployeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
