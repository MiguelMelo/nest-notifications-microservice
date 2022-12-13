import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('app')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('notifications')
  getNotifications() {
    return this.prisma.notification.findMany();
  }

  @Post('notifications')
  async create() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Oba! Você recebeu uma nova notificação.',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
