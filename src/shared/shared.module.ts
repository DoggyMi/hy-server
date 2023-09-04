import { Module } from '@nestjs/common';
import { SystemService } from './system.service';
import { configModuleOptions } from './configs/module-options';
import { ConfigModule } from '@nestjs/config';
import { DatabaseProviders } from './database.provider';
import { AppLoggerModule } from './logger/logger.module';
@Module({
  imports: [ConfigModule.forRoot(configModuleOptions), AppLoggerModule],
  exports: [SystemService, ConfigModule, AppLoggerModule, ...DatabaseProviders],
  providers: [SystemService, ...DatabaseProviders],
})
export class SharedModule {}
