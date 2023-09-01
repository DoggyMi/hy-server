import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SystemService } from 'src/shared/system.service';
import { MongoRepository } from 'typeorm';
import { User } from './entities/user.mongo.entity';

@Injectable()
export class UserService {
  constructor(
    // 追加模块注入
    private readonly systemService: SystemService,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: MongoRepository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    console.log(this.systemService.getEnv());
    return this.userRepository.save({
      name: 'gaga',
      email: '1@1.com',
    });
  }

  findAll() {
    // throw '异常'; // 异常
    // throw new HttpException('自定义异常', HttpStatus.CONFLICT);
    return this.userRepository.findAndCount({});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
