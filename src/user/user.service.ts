import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SystemService } from 'src/shared/system.service';

@Injectable()
export class UserService {
  constructor(
    // 追加模块注入
    private readonly systemService: SystemService,
  ) {}
  create(createUserDto: CreateUserDto) {
    console.log(this.systemService.getEnv());
    return 'This action adds a new user';
  }

  findAll() {
    // throw '异常'; // 异常
    throw new HttpException('自定义异常', HttpStatus.CONFLICT);
    return `This action returns all user`;
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
