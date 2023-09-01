import { Module } from '@nestjs/common';
import { SystemService } from './system.service';
import { configModuleOptions } from './configs/module-options';
import { ConfigModule } from '@nestjs/config';
import { DatabaseProviders } from './database.provider';
@Module({
  imports: [ConfigModule.forRoot(configModuleOptions)],
  exports: [SystemService, ConfigModule, ...DatabaseProviders],
  providers: [SystemService, ...DatabaseProviders],
})
export class SharedModule {}
