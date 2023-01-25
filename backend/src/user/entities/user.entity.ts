import { Company } from './company.entity';

export class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  companies?: Company[];
}
