import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateUserDto {
  /**
   * 手机号（系统唯一）
   */
  @ApiProperty({ example: '13611177421' })
  @Matches(/^1\d{10}$/g, { message: '请输入手机号' })
  readonly phoneNumber: string;

  @ApiProperty({ example: '然叔' }) name: string;

  @ApiProperty({ example: '123456' })
  @IsNotEmpty()
  @Length(6, 10)
  password: string;

  @ApiProperty({ example: '15906475@qq.com' })
  @IsEmail()
  email: string;
}
