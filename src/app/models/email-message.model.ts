import { MessagePriority } from './message-priority.enum';

export interface EmailMessage {
  id?: string;
  to?: string[];
  cc?: string[];
  bcc?: string[];
  from?: string;
  subject?: string;
  content?: string;
  location?: 'inbox' | 'sent' | 'draft' | 'trash' | 'outbox';
  createdAt?: Date;
  updatedAt?: Date;
  sentAt?: Date;
  readAt?: Date;
  receivedAt?: Date;
}
