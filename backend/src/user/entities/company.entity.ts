import { User } from './user.entity';
import { Location } from './location.entity';

export class Company {
  id?: string;
  name: string;
  website: string;
  cnpj: string;
  locations?: Location[];
  userId?: string;
  user?: User;
}
