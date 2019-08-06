import { DynamicModule } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { HOST, PORT, QUEUE } from './microservices.constants';
import { ConfigService } from './config.service';
import IRMQOptions from './rmq-options.interface';
import { ClientsModuleOptions } from '@nestjs/microservices/module/interfaces/clients-module.interface';

const getClientsModuleOptions = (options: IRMQOptions[]): ClientsModuleOptions => options
  .map(({ fileName, name }) => {
    const config = new ConfigService(fileName);
    const host = config.get(HOST);
    const port = config.get(PORT);

    const url = `${host}:${port}`;
    const queue = config.get(QUEUE);

    return {
      name,
      transport: Transport.RMQ,
      options: {
        urls: [url],
        queue,
        queueOptions: { durable: false },
      },
    };
  });

export class MicroservicesServices {
  static register(...options: IRMQOptions[]): DynamicModule {
    const clientsModuleOptions = getClientsModuleOptions(options);

    return ClientsModule.register(clientsModuleOptions);
  }
}
