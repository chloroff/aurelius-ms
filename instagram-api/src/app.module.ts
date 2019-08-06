import { Module } from '@nestjs/common';

import { AppConfigModule } from './modules/app-config/app-config.module';
import { CampaignsModule } from './modules/campaigns/campaigns.module';

@Module({
  imports: [
    AppConfigModule,
    CampaignsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
