import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { VersioningType } from '@nestjs/common';
import { setupB2CSwagger } from './api/swagger/api-b2c.config';
import { setupB2BSwagger } from './api/swagger/api-b2b.config';

const banner = `
██████  ███████  ██████  ██  ██████  ███    ██      █████  ██████  ██ 
██   ██ ██      ██       ██ ██    ██ ████   ██     ██   ██ ██   ██ ██ 
██████  █████   ██   ███ ██ ██    ██ ██ ██  ██     ███████ ██████  ██ 
██   ██ ██      ██    ██ ██ ██    ██ ██  ██ ██     ██   ██ ██      ██ 
██   ██ ███████  ██████  ██  ██████  ██   ████     ██   ██ ██      ██ 
`;

console.log(banner);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // Api
  setupB2BSwagger(app);
  setupB2CSwagger(app);
  
  // Start the REST API server
  const port = process.env.PORT || 3000;

  app.listen(port)
    .then(() => {
      console.log(`Application is running on: http://localhost:${port}`);
    })
    .catch((error) => {
      console.error(`Failed to start the application on port ${port}`, error);
    });
}

bootstrap();
