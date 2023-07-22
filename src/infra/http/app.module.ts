import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { HttpModule } from './Http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
