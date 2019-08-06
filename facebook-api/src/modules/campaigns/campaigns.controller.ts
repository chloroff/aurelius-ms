import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import Campaign from './campaign.interface';

@Controller()
export class CampaignsController {
  @MessagePattern({ cmd: 'get_campaigns' })
  getCampaigns(): string {
    return 'fb_get_campaigns';
  }

  @MessagePattern({ cmd: 'create_campaigns'})
  createCampaign(campaign: Campaign): Campaign {
    return campaign;
  }
}
