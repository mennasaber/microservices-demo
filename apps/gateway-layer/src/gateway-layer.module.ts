import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { protoPathValues } from 'utilities/enums/constants';
import { GatewayLayerController } from './gateway-layer.controller';
import { GatewayLayerService } from './gateway-layer.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '127.0.0.1:4000',
          package: 'user',
          protoPath: join(__dirname, protoPathValues.User),
        },
      },
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 3000 },
      },
    ]),
  ],
  controllers: [GatewayLayerController],
  providers: [GatewayLayerService],
})
export class GatewayLayerModule {}
