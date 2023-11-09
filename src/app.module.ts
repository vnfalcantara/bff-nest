import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import environmentConfig from './config/environment.config';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseConfig } from './config/database.config';
import { BullModule } from '@nestjs/bull';
import { QueueConfig } from './config/queue.config';
import { ThrottlerModule } from '@nestjs/throttler';
import { ThrottlerConfig } from './config/throttler.config';
import { RedisConfig } from './config/cache.config';
import { RedisModule } from '@nestjs-modules/ioredis';

const { NODE_ENV } = process.env;
const prod = !NODE_ENV || NODE_ENV === 'production';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !prod ? `./environment/${process.env.NODE_ENV}.env` : '',
      isGlobal: true,
      load: [environmentConfig],
      // validationSchema: environmentSchema,
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),

    RedisModule.forRootAsync({
      imports: [ConfigModule],
      useClass: RedisConfig,
    }),

    BullModule.forRootAsync({
      imports: [ConfigModule],
      useClass: QueueConfig,
    }),

    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      useClass: ThrottlerConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
