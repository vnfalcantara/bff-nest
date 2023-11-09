import { Injectable } from '@nestjs/common';
import {
  BullModuleOptions,
  BullOptionsFactory,
  SharedBullConfigurationFactory,
} from '@nestjs/bull';
import { ConfigService } from '@nestjs/config';
import { ThrottlerModuleOptions, ThrottlerOptionsFactory } from '@nestjs/throttler';

@Injectable()
export class ThrottlerConfig implements ThrottlerOptionsFactory {
  constructor(private configService: ConfigService) {}
  
  createThrottlerOptions(): ThrottlerModuleOptions | Promise<ThrottlerModuleOptions> {
    return this.configService.get('throttler');
  }

}
