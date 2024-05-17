import { config } from 'dotenv';
config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,POST,OPTIONS',
    preflightContinue: false,
    credentials: true,
    optionsSuccessStatus: 200,
  });

  const port = configService.get('PORT');
  await app.listen(port ?? 5000);
}

bootstrap()
  .then()
  .catch((error) => {
    console.error('unable to start', error);
    throw error;
  });
