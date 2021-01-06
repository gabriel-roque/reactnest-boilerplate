import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getStatusAPI(): Record<string, string> {
    return { status: 'online' };
  }
}
