import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GatewayLayerController } from './gateway-layer.controller';
import { GatewayLayerService } from './gateway-layer.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 4000 },
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
