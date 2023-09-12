import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { PaginationParams2Dto } from 'src/shared/dtos/pagination-params.dto';

@ApiTags('用户管理')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  @ApiOperation({
    summary: '新增用户',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: CreateUserDto,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({
    summary: '查找所有用户',
  })
  @Get()
  async findAll(@Query() query: PaginationParams2Dto) {
    const { data, count } = await this.userService.findAll(query);
    // console.log(this.configService);
    // console.log(this.configService.get<string>('env'));
    return {
      data,
      meta: { total: count },
    };
  }

  @ApiOperation({
    summary: '查找单个用户',
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      data: await this.userService.findOne(id),
    };
  }

  @ApiOperation({
    summary: '更新单个用户',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCourseDto: CreateUserDto,
  ) {
    return {
      data: await this.userService.update(id, updateCourseDto),
    };
  }

  @ApiOperation({
    summary: '删除单个用户',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
