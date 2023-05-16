import { NestFactory } from '@nestjs/core';
import { GatewayLayerModule } from './gateway-layer.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayLayerModule);
  await app.listen(5000);
}
bootstrap();
