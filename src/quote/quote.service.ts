import { Injectable, Inject } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import data from './data';

@Injectable()
export class QuoteService {
  constructor(
    @Inject('QUOTE_MODEL')
    private quoteModel: Model<any>,
  ) {}

  getQuote(): Object {
    return {
      text: 'Today is the tomorrow we worried about yesterday.',
      author: 'Anonymous',
      tag: 'general',
    };
  }
  getRandom(): Object {
    const index = Math.floor(Math.random() * data.length);
    return data[index];
  }
  async getQuotes(start, limit): Promise<Object> {
    if (start === undefined) start = 0;
    if (limit === undefined) limit = 10;
    start = Math.max(0, start);
    limit = Math.min(limit, 50);
    const quotes = await this.quoteModel.find().skip(start).limit(limit).exec();
    return {
      count: quotes.length,
      quotes,
    };
  }
}
