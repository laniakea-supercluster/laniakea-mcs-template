import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from '@/adapters/inbound/controller/app.controller';
import { AppService } from '@/application/services/app.service';
import { AppUseCase } from '@/application/usescases/app.usecase';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.develop.env', isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: AppUseCase, useClass: AppService },
  ],
})
export class AppModule {}
