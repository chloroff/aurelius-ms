import { Module } from '@nestjs/common';
import { AppConfigService } from './app-config.service';

const mode = process.env.NODE_ENV;
const extention = mode ? `.${mode}` : '';

@Module({
  providers: [
    {
      provide: AppConfigService,
      useValue: new AppConfigService(`.env${extention}`),
    },
  ],
  exports: [AppConfigService],
})
export class AppConfigModule {}
