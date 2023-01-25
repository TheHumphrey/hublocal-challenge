import {
  IsString,
  Matches,
  IsNotEmpty,
  Length,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O campo "name" não pode ser enviado vazio' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'O campo "email" não pode ser enviado vazio' })
  email: string;
  @IsString()
  @IsNotEmpty({ message: 'O campo "password" não pode ser enviado vazio' })
  @Length(8, 40, { message: 'A Senha deve ter no minimo 8 caracteres' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca.',
  })
  password: string;
}
