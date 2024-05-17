import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('backend')
  status() {
    return {
      status: 'OK',
      data: `Main backend`,
    };
  }
}
