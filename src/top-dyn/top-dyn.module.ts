import { Module, DynamicModule, Type, Provider } from '@nestjs/common';
import { TopDynService } from './top-dyn.service';

@Module({
  providers: [TopDynService]
})
export class TopDynModule {
  static forRootAsync(options: { imports?: Array<DynamicModule | Type<any> | Promise<DynamicModule>>, useFactory?: any, inject?: any[] }): DynamicModule {
    return {
      module: TopDynModule,
      imports: options.imports || [],
      providers: this.createProviders(options)
    }
  }

  private static createProviders(options: any): Provider[] {
    return [{
      provide: 'TopDynServiceOptions',
      useFactory: options.useFactory,
      inject: options.inject || [],
    }]
  }
}
