import { MeasuringDataService } from './../measuringData/measuringData.service';
import { prismaMeasuringDataEntityList } from './prisma-measuring-data-entity.list.mock';

export const measuringDataMock = {
  create: jest.fn().mockResolvedValue(prismaMeasuringDataEntityList[0]),
  list: jest.fn().mockResolvedValue(prismaMeasuringDataEntityList),
};

export const measuringDataServiceMock = {
  provide: MeasuringDataService,
  useValue: measuringDataMock,
};
