import { Injectable } from '@nestjs/common';
import {
  BullModuleOptions,
  SharedBullConfigurationFactory,
} from '@nestjs/bull';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QueueConfig implements SharedBullConfigurationFactory {
  constructor(private configService: ConfigService) {}

  createSharedConfiguration(): BullModuleOptions | Promise<BullModuleOptions> {
    return this.configService.get('redis');
  }
}
