import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Query('age') age: number, @Query('breed') breed: string) {
    return `this action find all cats with ${age} and ${breed}`;
  }

  @Post()
  @HttpCode(204)
  create(@Body() createCatDto: CreateCatDto) {
    return 'this action create cat';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Cat ${id}`;
  }
}
