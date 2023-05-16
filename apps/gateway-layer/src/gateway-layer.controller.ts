import { Controller, Get } from '@nestjs/common';
import { GatewayLayerService } from './gateway-layer.service';

@Controller()
export class GatewayLayerController {
  constructor(private readonly gatewayLayerService: GatewayLayerService) {}

  @Get('user')
  getHelloForUser() {
    return this.gatewayLayerService.getHelloFromUser();
  }

  @Get('product')
  getHelloForProduct() {
    return this.gatewayLayerService.getHelloFromProduct();
  }
}
