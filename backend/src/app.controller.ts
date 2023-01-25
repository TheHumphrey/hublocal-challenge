import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { PrismaService } from './database/prisma.service';
import { CreateCompanyBody } from './dto/create-company';
import { CreateLocationBody } from './dto/create-location';
import { User } from './user/entities/user.entity';

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) { }

  @Get('companies')
  async getCompaniesFromUser(@CurrentUser() user: User) {
    const companies = await this.prisma.company.findMany({
      where: {
        userId: user.id,
        isActive: true,
      },
    });
    return companies;
  }

  @Post('companies')
  async createdNewCompany(
    @CurrentUser() user: User,
    @Body() body: CreateCompanyBody,
  ) {
    const { cnpj, name, website } = body;
    const company = await this.prisma.company.create({
      data: {
        cnpj,
        name,
        website,
        userId: user.id,
      },
    });

    return company;
  }

  @Put('companies/:companyId')
  async putCompanyById(
    @Param('companyId') companyId,
    @Body() body: CreateCompanyBody,
  ) {
    const putedCompany = await this.prisma.company.update({
      where: {
        id: companyId,
      },
      data: body,
    });

    return putedCompany;
  }

  @Delete('companies/:companyId')
  async deleteCompanyById(@Param('companyId') companyId) {
    const deletedCompany = await this.prisma.company.update({
      where: {
        id: companyId,
      },
      data: {
        isActive: false,
      },
    });

    return deletedCompany;
  }

  @Get('location/:companyId')
  async getLocationFromCompanyId(@Param('companyId') companyId) {
    const locations = await this.prisma.location.findMany({
      where: {
        companyId: companyId,
        isActive: true,
      },
    });
    return locations;
  }

  @Post('location/:companyId')
  async createdNewLocationByCompanyId(
    @Param('companyId') companyId,
    @Body() body: CreateLocationBody,
  ) {
    const { cep, city, district, name, number, state, street } = body;
    const location = await this.prisma.location.create({
      data: {
        cep,
        city,
        district,
        name,
        number,
        state,
        street,
        companyId,
      },
    });

    return location;
  }

  @Put('location/:locationId')
  async putLocationById(
    @Param('locationId') locationId,
    @Body() body: CreateLocationBody,
  ) {
    const putedLocation = await this.prisma.location.update({
      where: {
        id: parseInt(locationId),
      },
      data: body,
    });

    return putedLocation;
  }

  @Delete('location/:locationId')
  async deleteLocationById(@Param('locationId') locationId) {
    const deletedLocation = await this.prisma.location.update({
      where: {
        id: parseInt(locationId),
      },
      data: {
        isActive: false,
      },
    });

    return deletedLocation;
  }
}
