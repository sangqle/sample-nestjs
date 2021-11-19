import { Controller, Get } from '@nestjs/common';
import { AuthorService } from './author.service';

@Controller()
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get('author')
  getQuote(): Object {
    return this.authorService.getAuthor();
  }
}
