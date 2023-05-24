import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getHello() {
    return { text: 'Hello World from product service using TCP transporter!' };
  }
}
