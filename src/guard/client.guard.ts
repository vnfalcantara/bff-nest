import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { Observable } from 'rxjs';
// import { ConfigService } from '@nestjs/config';
import { ClientService } from 'src/client/client.service';

@Injectable()
export class ClientGuard implements CanActivate {
  apptoken: string;
  apptokenIgnore: boolean;

  constructor(
    // private configService: ConfigService,
    @Inject(ClientService) private clientService: ClientService,
  ) {
    // this.apptoken = this.configService.get('apptoken');
    // this.apptokenIgnore = this.configService.get('apptokenIgnore');
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const { headers = {} } = req;

    // TODO VALIDAR CACHE

    return this.clientService
      .findOne({ uuid: headers['client-id'] })
      .then((client) => {
        return client?.active;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  }
}
