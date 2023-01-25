import { IsNotEmpty } from 'class-validator';

export class CreateCompanyBody {
  id?: string;
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  website: string;

  @IsNotEmpty()
  cnpj: string;
}
