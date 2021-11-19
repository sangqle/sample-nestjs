import * as mongoose from 'mongoose';

export const QuoteSchema = new mongoose.Schema({
  text: String,
  author: Number,
  tag: String,
});
