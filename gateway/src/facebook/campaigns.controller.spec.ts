import { Test, TestingModule } from '@nestjs/testing';
import { FBCampaignsController } from './campaigns.controller';

describe('FbCampaigns Controller', () => {
  let controller: FBCampaignsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FBCampaignsController],
    }).compile();

    controller = module.get<FBCampaignsController>(FBCampaignsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
