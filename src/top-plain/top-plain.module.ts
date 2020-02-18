import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TopPlainService } from './top-plain.service';

@Module({
  imports: [ConfigModule],
  providers: [TopPlainService]
})
export class TopPlainModule {}
