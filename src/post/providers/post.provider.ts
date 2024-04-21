import { DataSource } from 'typeorm';
import { Posts } from '../entities/post.entity';

export const postProviders = [
  {
    provide: 'POST_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Posts),
    inject: ['DATA_SOURCE'],
  },
];