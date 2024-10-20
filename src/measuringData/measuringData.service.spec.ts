import { Test, TestingModule } from '@nestjs/testing';
import { prismaMock, PrismaServiceMock } from '../testing/prisma-service.mock';
import { MeasuringDataService } from './measuringData.service';
import { measuringDataRegisterDTOMock } from './../testing/measuring-data-register-dto.mock';
import { prismaMeasuringDataEntityList } from './../testing/prisma-measuring-data-entity.list.mock';
import { UserService } from '../user/user.service';

describe('MeasuringDataService', () => {
  let measuringDataService: MeasuringDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeasuringDataService, PrismaServiceMock, UserService],
    }).compile();

    measuringDataService =
      module.get<MeasuringDataService>(MeasuringDataService);
  });

  test('Validate definitions', () => {
    expect(measuringDataService).toBeDefined();
  });

  describe('Create', () => {
    test('Method: Create', async () => {
      const result = await measuringDataService.create(
        measuringDataRegisterDTOMock,
      );

      expect(result).toEqual(prismaMeasuringDataEntityList[0]);
    });
  });

  describe('Read', () => {
    test('Method: List', async () => {
      const result = await measuringDataService.list(2);

      expect(result).toEqual(prismaMeasuringDataEntityList);
    });
  });
});
