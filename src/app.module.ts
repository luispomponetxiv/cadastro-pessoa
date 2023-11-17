import { Module } from '@nestjs/common';
import { PersonModule } from './modules/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configModule } from '@nestjs';

@Module({
  imports: [
    PersonModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cadastro',
      entities: ['dist/**/*.model.js'],
      synchronize: true,
      debug: true,
    }),
  ],
})
export class AppModule {}
