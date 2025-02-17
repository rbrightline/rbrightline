import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  some() {
    return { some: 'some' };
  }

  @Get()
  getData() {
    return this.appService.getData();
  }
}
