import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { protoPathValues } from 'utilities/enums/constants';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '127.0.0.1:4000',
        package: 'user',
        protoPath: join(__dirname, protoPathValues.User),
      },
    },
  );
  await app.listen();
}
bootstrap();
