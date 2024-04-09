import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app/app.module';
import "reflect-metadata";



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
