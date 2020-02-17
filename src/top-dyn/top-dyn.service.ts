import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class TopDynService {
  constructor(@Inject('TopDynServiceOptions') private readonly config: any) {}
}
