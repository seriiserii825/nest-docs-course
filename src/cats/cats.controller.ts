import { Controller, Get, Header, HttpCode, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll() {
    return 'this action find all cats';
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'no-store')
  create() {
    return 'this action create cat';
  }
}
