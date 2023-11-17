import { IsString, IsInt, MaxLength, IsEmail } from 'class-validator';

export class PersonValidator {
  @IsString()
  @MaxLength(200)
  name: string;

  @IsInt()
  age: number;

  @IsString()
  @MaxLength(200)
  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(15)
  phone: string;
}
