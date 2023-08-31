import { Module } from '@nestjs/common';
import { SystemService } from './system.service';
import { configModuleOptions } from './configs/module-options';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(configModuleOptions)],
  exports: [SystemService, ConfigModule],
  providers: [SystemService],
})
export class SharedModule {}
