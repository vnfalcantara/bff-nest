import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, Min } from 'class-validator';

export class ClientPayload {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly type: string;
}

export class Client extends ClientPayload {
  uuid: string;

  active: boolean;
}

export class ClientUpdate extends PartialType(Client) {}
