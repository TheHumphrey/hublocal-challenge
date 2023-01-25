import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { PrismaService } from './database/prisma.service';
import { User } from './user/entities/user.entity';

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('companies')
  async getCompaniesFromUser(@CurrentUser() user: User) {
    return user;
  }
}
