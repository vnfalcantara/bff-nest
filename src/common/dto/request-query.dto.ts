export class RequestQuery {
  startDate?: any;
  endDate?: any;
  match?: any = {};
  fields?: any = {};
  options: RequestQueryOptions;
}

export class RequestQueryOptions {
  sort?: any;
  skip?: number;
  limit?: number;
  password?: boolean;
}
