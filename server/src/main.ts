import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:3000',
      methods: 'GET, POST',
      allowedHeaders: 'Content-Type, Accept',
    },
  });

  await app.listen(4000);
}
bootstrap();
