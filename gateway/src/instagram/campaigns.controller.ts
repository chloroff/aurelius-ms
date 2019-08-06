import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { INST_API } from '../microservices.constants';

@Controller('instagram')
export class InstCampaignsController {
  constructor(@Inject(INST_API) private readonly client: ClientProxy) {}

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
