import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { FB_API } from '../microservices.constants';

@Controller('facebook')
export class FBCampaignsController {
  constructor(@Inject(FB_API) private readonly client: ClientProxy) {}

  @Get('campaigns')
  getCampaigns() {
    const pattern = { cmd: 'get_campaigns' };
    const payload = 'data';

    return this.client.send(pattern, payload);
  }

  @Post('campaigns')
  createCampaign(campaign) {
    const pattern = { cmd: 'create_campaigns' };

    return this.client.send(pattern, campaign);
  }
}
