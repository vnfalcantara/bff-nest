import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import { ClientStatus, ClientStatusEnum } from '../../common/enum';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  uuid: string;

  @Prop({ required: true })
  type: string;

  @Prop({ default: true })
  active: boolean;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
