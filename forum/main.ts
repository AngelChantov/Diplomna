require('dotenv').config({ path: 'src/DB.env' });
import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app/app.module';
import "reflect-metadata";



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // This enables CORS for all domains
  await app.listen(3000);
}
bootstrap();