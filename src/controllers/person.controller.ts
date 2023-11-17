import {
  Body,
  Controller,
  Delete,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonModel } from 'src/models/person.model';
import { PersonValidator } from 'src/validation/person.validation';
import { Repository } from 'typeorm';

@Controller('/people')
export class PersonController {
  constructor(
    @InjectRepository(PersonModel) private model: Repository<PersonModel>,
  ) {}

  @Post()
  public async create(
    @Body() body: PersonValidator,
  ): Promise<{ data: PersonModel }> {
    const personCreated = await this.model.save(body);
    return { data: personCreated };
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PersonValidator,
  ): Promise<{ data: PersonModel }> {
    const person = await this.model.findOne({ where: { id } });

    if (!person) {
      throw new NotFoundException(`id:${id} não encontrado!`);
    }

    await this.model.update({ id }, body);

    return { data: await this.model.findOne({ where: { id } }) };
  }

  @Delete(':id')
  public async delete(@Param('id') id: number): Promise<{ data: string }> {
    const person = await this.model.findOne({ where: { id } });

    if (!person) {
      throw new NotFoundException(`id:${id} não encontrado!`);
    }

    await this.model.delete(id);

    return { data: `Pessoa com id: ${id} foi deletada com sucesso` };
  }
}
