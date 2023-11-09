import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RequestQueryOptions } from '../common/dto/request-query.dto';
import { ClientPayload } from './dto/client.dto';
import {
  Client as ClientModel,
  ClientDocument,
} from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(ClientModel.name)
    private readonly model: Model<ClientDocument>,
  ) {}

  create(data: ClientPayload) {
    const createdData = new this.model(data);
    return createdData.save();
  }

  findAll(match = {}, fields = {}, options: RequestQueryOptions = {}) {
    const { sort, skip, limit } = options;

    return this.model
      .find(match, fields)
      .sort(sort)
      .skip(Number(skip))
      .limit(Number(limit));
  }

  findOne(match = {}, fields = {}) {
    return this.model.findOne(match, fields);
  }

  findById(_id: string, fields = {}) {
    return this.model.findOne({ _id }, fields);
  }

  count(match = {}) {
    return this.model.count(match);
  }

  // update(match = {}, data: ClientUpdate) {
  update(match = {}, data: any = {}, config: any = {}) {
    return this.model.updateMany(match, data, config);
  }

  // updateById(_id: string, data: ClientUpdate) {
  updateById(_id: string, data: any = {}, config: any = {}) {
    return this.model.updateOne({ _id }, data, config);
  }

  remove(match = {}) {
    return this.model.deleteMany(match);
  }

  removeById(_id) {
    return this.model.deleteOne({ _id });
  }
}
