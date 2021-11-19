import { Connection } from 'mongoose';
import { QuoteSchema } from './schemas/quote.schema';

export const quotesProviders = [
  {
    provide: 'QUOTE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Quote', QuoteSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
