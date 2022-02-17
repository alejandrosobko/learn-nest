import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // esto hace que se omita cualquier param enviado que no sea valido
    forbidNonWhitelisted: true, // esto devuelve un error si envian algun param inesperado
    transform: true, // esto transforma el payload que recibimos en el request en la clase DTO esperada
    transformOptions: {
      enableImplicitConversion: true,
    },
  }));
  await app.listen(3000);
}
bootstrap();
