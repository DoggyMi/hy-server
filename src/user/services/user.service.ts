import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { SystemService } from 'src/shared/system.service';
import { MongoRepository } from 'typeorm';
import { User } from '../entities/user.mongo.entity';
import { AppLogger } from 'src/shared/logger/logger.service';

@Injectable()
export class UserService {
  constructor(
    // 追加模块注入
    private readonly systemService: SystemService,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: MongoRepository<User>,
    private readonly logger: AppLogger,
  ) {
    this.logger.setContext(UserService.name);
  }
  create(createUserDto: CreateUserDto) {
    // console.log(this.systemService.getEnv());

    return this.userRepository.save({
      name: 'gaga2',
      email: '1@2.com',
    });
  }

  async findAll() {
    // throw '异常'; // 异常
    // throw new HttpException('自定义异常', HttpStatus.CONFLICT);

    this.logger.warn(null, 'user Create ...', { a: 123 });
    const [data, count] = await this.userRepository.findAndCount({});
    return {
      data,
      count,
    };
  }

  async findOne(_id: string) {
    return await this.userRepository.findOneBy(_id);
  }

  async update(id: string, user: CreateUserDto) {
    return await this.userRepository.update(id, user);
  }

  async remove(id: string): Promise<any> {
    return await this.userRepository.delete(id);
  }
}
