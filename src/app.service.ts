import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): Object {
    return {
      name: 'Get quotes',
      version: 1,
    };
  }
}
