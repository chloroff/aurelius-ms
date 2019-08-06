import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';
import { MicroservicesService } from './microservices.service';

async function bootstrap() {
  const ms = new MicroservicesService();
  const app = await ms.createConnection(AppModule);
  app.listen(() => new Logger('Microservice is listening'));
}
bootstrap();
