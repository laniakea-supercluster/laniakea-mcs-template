import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Domain } from '@/domain/app.domain';
import { AppUseCase } from '@/application/usescases/app.usecase';

@Injectable()
export class AppService implements AppUseCase {
  getDomain(): Domain {
    return new Domain(uuidv4(), `System: Date[${new Date()}]`);
  }
}
