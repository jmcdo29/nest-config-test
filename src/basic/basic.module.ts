import { Module } from '@nestjs/common';
import { BasicService } from './basic.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [BasicService]
})
export class BasicModule {}
