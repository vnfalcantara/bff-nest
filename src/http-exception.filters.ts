import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('HttpException');

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const correlationId = uuidv4();

    const data = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      code: exception.message,
      message: '',
    };

    this.logger.error(exception);
    this.logger.error(data);

    response.setHeader('correlation-id', correlationId);
    response.status(status).json(data);
  }
}
