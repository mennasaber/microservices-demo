import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello() {
    return { text: 'Hello World from user service using GRPC transporter!' };
  }
}
