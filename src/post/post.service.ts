import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { UpdatePostDto } from './dto/update-post.dto';
import { Repository } from 'typeorm';
import { Posts } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {

  constructor(
    @Inject('POST_REPOSITORY')
    private readonly postRepository: Repository<Posts>
  ){}

  create(createPostDto: CreatePostDto) {
    try {
      return this.postRepository.save(createPostDto)
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }

  findAll() {
    try {
      return this.postRepository.find()
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }

  findOne(id: number) {
    try {
      return this.postRepository.findOne({where: {id: id}})
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    try {
      return this.postRepository.update(id, updatePostDto)
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }

  remove(id: number) {
    try {
      return this.postRepository.delete(id)
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }
}
