import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://littleguppies:sanglq3@cluster0.gtmb6.mongodb.net/quotes',
      ),
  },
];
