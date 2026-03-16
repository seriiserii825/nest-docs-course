import { Injectable } from '@nestjs/common';
import { CatDto } from './dto/cat.dto';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  private cats: CatDto[] = [];

  create(cat: CreateCatDto) {
    const id = new Date().toISOString();
    cat.id = id;
    this.cats.push(cat);
  }

  findAll() {
    return this.cats;
  }

  update(cat: UpdateCatDto) {
    const catIndex = this.cats.findIndex(
      (catItem: CatDto) => catItem.id === cat.id,
    );
    this.cats[catIndex].age = cat.age;
    this.cats[catIndex].breed = cat.breed;
    this.cats[catIndex].name = cat.name;
  }

  findOne(id: string) {
    const cat = this.cats.find((cat: CatDto) => cat.id === id);
    return cat;
  }

  delete(id: string) {
    const cat = this.findOne(id);
    if (cat) {
      this.cats = this.cats.filter((cat: CatDto) => cat.id !== id);
    }
  }
}
