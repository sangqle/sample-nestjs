import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  getAuthor(): Object {
    return {
      name: 'Sang Le',
    };
  }
}
