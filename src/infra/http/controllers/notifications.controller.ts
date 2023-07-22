import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { createNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: createNotificationBody) {
    const { content, category, recipientId } = body;

    const {} = await this.sendNotification.execute();
 };
}
