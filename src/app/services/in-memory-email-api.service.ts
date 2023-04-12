import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EmailMessage } from 'app/models';

export class InMemoryEmailApiService implements InMemoryDbService {
  createDb() {
    const emails: EmailMessage[] = [
      {
        id: '1',
        location: 'inbox',
        from: 'John Doe',
        subject: 'Hello',
        content: 'Hello World',
        sentAt: new Date(),
      },
      {
        id: '2',
        location: 'inbox',
        from: 'Jane Doe',
        subject: 'Hi',
        content: 'Hi World',
        receivedAt: new Date(),
      },
    ];

    console.log('InMemoryEmailApiService.createDb()', emails);
    return { emails };
  }
}
