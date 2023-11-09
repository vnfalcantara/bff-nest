import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService | any>(ConfigService);
  const port = config.port || 4000;

  const logger = new Logger('bootstrap');

  await app.listen(port);
  logger.log(`App running on ${port}`);
}
bootstrap();
