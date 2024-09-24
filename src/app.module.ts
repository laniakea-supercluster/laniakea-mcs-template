import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';

import { LoggerModule, AppLogger } from '@atisiothings/laniakea-lib-audit';
import { AuthClientModule } from '@atisiothings/laniakea-lib-http/dist/modules/auth.module';
import { CustomCorsMiddleware } from '@atisiothings/laniakea-lib-http/dist/middleware/cors.middleware'; 

import { AuthGuard } from '@/security/auth.guard';

const routes = [
  '*/auth',
]

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot({ level: 'debug' }),
    AuthClientModule.forRoot('localhost:50051'),
  ],
  providers: [
    AppLogger,
    {provide: APP_GUARD, useClass: AuthGuard},
  ],
  exports: []
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CustomCorsMiddleware)
      .forRoutes(...routes);
  }
}
