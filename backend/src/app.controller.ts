import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { CreateUserBody } from './dtos/create-user-body';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('user')
  async createUser(@Body() body: CreateUserBody) {
    const { name, email, password } = body;

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return {
      user,
    };
  }
}
