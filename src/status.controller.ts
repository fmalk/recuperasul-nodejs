import { Controller, Get } from '@nestjs/common';

@Controller()
export class StatusController {
  @Get('status')
  status() {
    return {
      status: 'OK',
      data: `Environment ${process.env.NODE_ENV}`,
    };
  }
}
