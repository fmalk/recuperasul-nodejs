import { Controller, Get } from '@nestjs/common';

@Controller('backend')
export class AppController {
  @Get('status')
  status() {
    return {
      status: 'OK',
      data: `Main backend`,
    };
  }
}
