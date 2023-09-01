import { User } from './entities/user.mongo.entity';

export const UserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: async (appDataSourece) =>
      await appDataSourece.getRepository(User),
    inject: ['MONGODB_DATA_SOURCE'],
  },
];
