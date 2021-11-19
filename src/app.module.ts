import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { QuoteModule } from './quote/quote.module';

@Module({
  imports: [QuoteModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
