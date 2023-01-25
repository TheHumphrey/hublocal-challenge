import { Company } from './company.entity';

export class Location {
  id: string;
  name: string;
  cep: string;
  street: string;
  number: string;
  district: string;
  city: string;
  state: string;
  companyId: string;
  company: Company;
}
