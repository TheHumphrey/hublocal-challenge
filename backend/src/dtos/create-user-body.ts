import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty({ message: 'O campo "name" não pode ser enviado vazio' })
  name: string;

  @IsNotEmpty({ message: 'O campo "email" não pode ser enviado vazio' })
  email: string;

  @IsNotEmpty({ message: 'O campo "password" não pode ser enviado vazio' })
  @Length(8, 40, { message: 'A Senha deve ter no minimo 8 caracteres' })
  password: string;
}
