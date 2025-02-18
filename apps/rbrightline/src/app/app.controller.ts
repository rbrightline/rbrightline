import { Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Property } from '@rline/property';

class Some {
  @Property({ type: 'array', items: { type: 'string' }, isArrayString: true })
  select: string[];

  @Property({ type: 'number', isNumberString: true })
  number: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  some(@Query() some: Some) {
    return some;
  }

  @Get()
  getData() {
    return this.appService.getData();
  }
}
