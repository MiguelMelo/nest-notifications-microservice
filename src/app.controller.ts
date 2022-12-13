import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationsBody } from './create-notifications-body';

@Controller('app')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('notifications')
  getNotifications() {
    return this.prisma.notification.findMany();
  }

  @Post('notifications')
  async create(@Body() body: CreateNotificationsBody) {
    const { recipientId, content, category } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
