import { INestMicroservice, Provider } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/common/enums/transport.enum';

import { PORT, QUEUE, HOST } from './microservices.constants';
import { AppConfigService } from './modules/app-config/app-config.service';

export class MicroservicesService {
  private readonly url: string;
  private readonly queue: string;

  constructor() {
    const config = new AppConfigService('microservice.env');
    const host = config.get(HOST);
    const port = config.get(PORT);

    this.url = `${host}:${port}`;
    this.queue = config.get(QUEUE);
  }

  async createConnection(module: Provider): Promise<INestMicroservice> {
    return await NestFactory.createMicroservice(module, {
      transport: Transport.RMQ,
      options: {
        urls: [this.url],
        queue: this.queue,
        queueOptions: { durable: false },
      },
    });
  }
}
