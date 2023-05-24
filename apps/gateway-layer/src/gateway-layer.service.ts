import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class GatewayLayerService implements OnModuleInit {
  private userService: any;
  constructor(
    @Inject('USER_PACKAGE') private userClient: ClientGrpc,
    @Inject('PRODUCT_SERVICE') private productClient: ClientProxy,
  ) {}

  onModuleInit() {
    this.userService = this.userClient.getService('UserService');
  }

  getHelloFromUser() {
    return this.userService.getHello({});
  }

  getHelloFromProduct() {
    return this.productClient.send({ cmd: 'hello' }, {});
  }
}
