import { Controller, Get, Inject } from '@nestjs/common';
import { Domain } from '@/domain/app.domain';
import { AppUseCase } from '@/application/usescases/app.usecase';

@Controller()
export class AppController {
  constructor(@Inject(AppUseCase) private readonly appUseCase: AppUseCase) {}

  @Get('/domain')
  getDomain(): Domain {
    return this.appUseCase.getDomain();
  }
}
