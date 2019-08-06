import { Test, TestingModule } from '@nestjs/testing';
import { InstCampaignsController } from './campaigns.controller';

describe('InstCampaigns Controller', () => {
  let controller: InstCampaignsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstCampaignsController],
    }).compile();

    controller = module.get<InstCampaignsController>(InstCampaignsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
