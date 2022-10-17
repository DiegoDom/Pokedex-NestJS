import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //?  Remueve todo lo que no está incluído en los DTOs
      forbidNonWhitelisted: true, //? Retorna bad request si hay propiedades en el objeto no requeridas
    }),
  );

  await app.listen(3000);
}
bootstrap();
