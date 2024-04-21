import { Posts } from 'src/post/entities/post.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'monorail.proxy.rlwy.net',
        port: 38668,
        username: 'root',
        password: 'vvLVsQxcnPxeYiElbgXOasjgVJgMwOnP',
        database: 'railway',
        entities: [
            Posts,
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];