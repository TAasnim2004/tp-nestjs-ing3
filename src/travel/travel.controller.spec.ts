import { Test, TestingModule } from '@nestjs/testing';
import { TravelController } from './travel.controller';

describe('TravelController', () => {
  let controller: TravelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelController],
    }).compile();

    controller = module.get<TravelController>(TravelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the new travel planning message', () => {
    expect(controller.create()).toBe('planifier un nouveau voyage ici');
  });
});
