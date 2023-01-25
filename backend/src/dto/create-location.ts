import { IsNotEmpty } from 'class-validator';

export class CreateLocationBody {
  id?: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  cep: string;
  @IsNotEmpty()
  street: string;
  @IsNotEmpty()
  number: string;
  @IsNotEmpty()
  district: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  state: string;
}
