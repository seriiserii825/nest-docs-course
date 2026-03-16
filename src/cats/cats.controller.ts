import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto_1';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Query('age') age: number, @Query('breed') breed: string) {
    return `this action find all cats with ${age} and ${breed}`;
  }

  @Post()
  @HttpCode(204)
  create(@Body() createCatDto: CreateCatDto) {
    return `this action create cat with age: ${createCatDto.age}`;
  }

  @Put()
  @HttpCode(204)
  update(@Body() updateCatDto: UpdateCatDto) {
    return `this action create cat with breed: ${updateCatDto.breed}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Cat ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `this action will delete cat with id: ${id}`;
  }
}
