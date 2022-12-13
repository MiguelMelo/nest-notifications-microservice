import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('app')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('notifications')
  getNotifications() {
    return this.prisma.notification.findMany();
  }
}
