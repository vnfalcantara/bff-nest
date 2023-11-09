import { Injectable } from '@nestjs/common';

import { CacheModuleOptions, CacheOptionsFactory } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import {
  RedisModuleOptions,
  RedisModuleOptionsFactory,
} from '@nestjs-modules/ioredis';

/*
@Injectable()
export class CacheConfig implements CacheOptionsFactory {
  constructor(private configService: ConfigService) {}

  createCacheOptions(): CacheModuleOptions | Promise<CacheModuleOptions> {
    const redis = this.configService.get('redis');

    return { ...redis, store: redisStore };
  }
}
*/

@Injectable()
export class RedisConfig implements RedisModuleOptionsFactory {
  constructor(private configService: ConfigService) {}

  createRedisModuleOptions(): RedisModuleOptions | Promise<RedisModuleOptions> {
    const redis = this.configService.get('redis');
    return { config: { url: redis.host } };
  }
}
