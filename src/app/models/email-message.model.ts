import { MessagePriority } from './message-priority.enum';

export interface EmailMessage {
  [key: string]: any;
  id: number;
  sender: string;
  recipient: string;
  subject: string;
  body: string;
  date: Date;
  priority: MessagePriority;
}