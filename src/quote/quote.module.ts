import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { quotesProviders } from 'src/database/quote.provider';

import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [QuoteController],
  providers: [QuoteService, ...quotesProviders],
})
export class QuoteModule {}
