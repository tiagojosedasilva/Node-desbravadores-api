import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { DatabaseModule } from 'src/infraestrutura/database/database.module';
import { postProviders } from './providers/post.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PostController],
  providers: [
    PostService,
    ...postProviders
  ],
})
export class PostModule {}
