import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TopPlainModule } from './top-plain/top-plain.module';
import { TopDynModule } from './top-dyn/top-dyn.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TopPlainModule,
    TopDynModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
