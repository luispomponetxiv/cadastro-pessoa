import { Module } from '@nestjs/common';
import { PersonController } from 'src/controllers/person.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { PersonModel } from 'src/models/person.model';

@Module({
  imports: [TypeOrmModule.forFeature([PersonModel])],
  controllers: [PersonController],
})
export class PersonModule {}
