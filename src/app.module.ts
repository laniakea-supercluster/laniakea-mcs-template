import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';

import { LoggerModule, AppLogger } from '@atisiothings/laniakea-lib-audit';
import { AuthClientModule } from '@atisiothings/laniakea-lib-http/dist/modules/auth.module';
import { CustomCorsMiddleware } from '@atisiothings/laniakea-lib-http/dist/middleware/cors.middleware'; 

import { AuthGuard } from '@/security/auth.guard';

const routes = [
  '*/*', //TODO: CONFIGURE ROUTES FOR CORS!!!
]

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot({ level: 'debug' }),
    PrometheusModule.register({
      path: '/metrics',  // This will expose the metrics endpoint at /metrics
      defaultMetrics: {
        enabled: true,    // Enable default system metrics (CPU, memory, etc.)
      },
    }),    
    AuthClientModule.forRoot(`${process.env.AUTH_SERVER_HOST}:${process.env.AUTH_SERVER_PORT}`),
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
