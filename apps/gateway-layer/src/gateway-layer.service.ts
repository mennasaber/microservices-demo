import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class GatewayLayerService {
  constructor(
    @Inject('USER_SERVICE') private userClient: ClientProxy,
    @Inject('PRODUCT_SERVICE') private productClient: ClientProxy,
  ) {}
  getHelloFromUser() {
    return this.userClient.send({ cmd: 'hello' }, {});
  }
  getHelloFromProduct() {
    return this.productClient.send({ cmd: 'hello' }, {});
  }
}
