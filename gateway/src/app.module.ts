import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FB_API, FB_CONFIG_PATH, INST_API, INST_CONFIG_PATH } from './microservices.constants';
import { FBCampaignsController } from './facebook/campaigns.controller';
import { InstCampaignsController } from './instagram/campaigns.controller';
import { MicroservicesServices } from './microservices.service';

const FB_MS_OPTIONS = { fileName: FB_CONFIG_PATH, name: FB_API };
const INST_MS_OPTIONS = { fileName: INST_CONFIG_PATH, name: INST_API };

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    MicroservicesServices.register(FB_MS_OPTIONS, INST_MS_OPTIONS),
  ],
  controllers: [
    FBCampaignsController,
    InstCampaignsController,
  ],
  providers: [],
})
export class AppModule {}
