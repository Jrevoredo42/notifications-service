import { SendNotification } from './send-notification';
import { InMemoryNotificationsRepository } from '../../../test/respositories/in-memory-notifications-repository';

describe('Send Notification', () => {
  it('should be able to a send notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'Email',
      recipientId: 'example-recipient-id',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
