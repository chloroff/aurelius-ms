import { Module } from '@nestjs/common';
import { CampaignsController } from './campaigns.controller';

@Module({
  controllers: [CampaignsController],
  providers: [],
})
export class CampaignsModule {}
