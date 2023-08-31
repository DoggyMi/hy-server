import { Module } from '@nestjs/common';
import { SystemService } from './system.service';
@Module({
  controllers: [],
  imports: [],
  exports: [SystemService],
  providers: [SystemService],
})
export class SharedModule {}
