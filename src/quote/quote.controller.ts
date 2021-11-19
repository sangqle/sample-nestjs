import { Controller, Get, Param, Req, Query } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { Request } from 'express';

@Controller()
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get('quote')
  getQuote(): Object {
    return this.quoteService.getQuote();
  }
  @Get('random')
  getRandom(): Object {
    return this.quoteService.getRandom();
  }
  @Get('quotes')
  getQuotes(@Query() query): Object {
    const { start, limit } = query;
    return this.quoteService.getQuotes(start, limit);
  }
}
