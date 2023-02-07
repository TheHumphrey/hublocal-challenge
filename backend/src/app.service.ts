import { Injectable } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { Company } from './user/entities/company.entity';
import { Location } from './user/entities/location.entity';
import { User } from './user/entities/user.entity';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) { }
  async gerCompaniesWithLocations(user: User): Promise<Company[]> {
    const companies: Company[] = await this.prisma.company.findMany({
      where: {
        userId: user.id,
        isActive: true,
      },
    });

    const companiesWithLocations: Company[] = [];

    for (let index = 0; index < companies.length; index++) {
      const locations = await this.prisma.location.findMany({
        where: {
          companyId: companies[index].id,
          isActive: true,
        },
      });

      companiesWithLocations.push({
        ...companies[index],
        locations: locations as unknown as Location[],
      });
    }

    return companiesWithLocations;
  }
}
