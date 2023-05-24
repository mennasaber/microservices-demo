import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HelloWorldRequest } from 'utilities/interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService')
  getHello(
    data: HelloWorldRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ) {
    return this.userService.getHello();
  }
}
