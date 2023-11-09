import { Controller, UseFilters, UseGuards } from '@nestjs/common';
import { ClientGuard } from 'src/guard/client.guard';
import { HttpExceptionFilter } from 'src/http-exception.filters';

@Controller('showcase')
@UseGuards(ClientGuard)
@UseFilters(new HttpExceptionFilter())
export class ShowcaseController {}
