import { Injectable } from '@angular/core';
import { subDays } from 'date-fns';
import { EmailMessage, MessagePriority } from '../models';
import { VirtualStorage } from './virtual-storage.class';

@Injectable({
  providedIn: 'root',
})
export class EmailStorageService extends VirtualStorage<EmailMessage> {
  constructor() {
    super();

    this.add({
      id: 1,
      sender: 'david@optio.ai',
      recipient: 'nina@commschool.ge',
      subject: 'Status update',
      body: 'Hi Nina, how are you? Students are doing great. I am looking forward to seeing you tomorrow.',
      date: subDays(new Date(), 1),
      priority: MessagePriority.Normal,
    });

    this.add({
      id: 2,
      sender: 'nina@commschool.ge',
      recipient: 'david@optio.ai',
      subject: 'Re: Status update',
      body: 'Hi David, I am doing great. See you tomorrow.',
      date: subDays(new Date(), 1),
      priority: MessagePriority.Normal,
    });
  }
}
