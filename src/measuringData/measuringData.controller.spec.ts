import { Test, TestingModule } from '@nestjs/testing';
import { AuthGuard } from '../guards/auth.guard';
import { guardMock } from '../testing/guard.mock';
import { MeasuringDataController } from './measuringData.controller';
import { MeasuringDataService } from './measuringData.service';
import { measuringDataServiceMock } from '../testing/measuring-data-service.mock';
import { prismaMeasuringDataEntityList } from './../testing/prisma-measuring-data-entity.list.mock';
import { measuringDataRegisterDTOMock } from '../testing/measuring-data-register-dto.mock';

describe('MeasuringDataController', () => {
  let measuringDataController: MeasuringDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeasuringDataController],
      providers: [measuringDataServiceMock],
    })
      .overrideGuard(AuthGuard)
      .useValue(guardMock)
      .compile();

    measuringDataController = module.get<MeasuringDataController>(
      MeasuringDataController,
    );
  });

  test('Validate definitions', () => {
    expect(measuringDataController).toBeDefined();
  });

  describe('Create', () => {
    test('Method: Create', async () => {
      const result = await measuringDataController.create(
        measuringDataRegisterDTOMock,
      );

      expect(result).toEqual(prismaMeasuringDataEntityList[0]);
    });
  });

  describe('Read', () => {
    test('Method: List', async () => {
      const result = await measuringDataController.listAll();

      expect(result).toEqual(prismaMeasuringDataEntityList);
    });
  });
});
