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
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(@Query('age') age: number, @Query('breed') breed: string) {
    return this.catsService.findAll(age, breed);
  }

  @Post()
  @HttpCode(204)
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Put()
  @HttpCode(204)
  update(@Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(updateCatDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.catsService.delete(id);
  }
}
