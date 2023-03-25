import {
  animate,
  AnimationEvent,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { EmailMessage } from '../models';

@Component({
  selector: 'app-message-list-item',
  templateUrl: './message-list-item.component.html',
  styleUrls: ['./message-list-item.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
    ]),

    trigger('readUnread', [
      state('read', style({ backgroundColor: '#f8f9fa' })),
      state('unread', style({ backgroundColor: '#e9ecef' })),
      transition('read <=> unread', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class MessageListItemComponent {
  @Input() message: EmailMessage;
  @Output() messageClicked = new EventEmitter<{ id: string }>();

  get readUnreadState() {
    return this.message.readAt ? 'read' : 'unread';
  }

  @HostListener('click') onClick() {
    this.messageClicked.emit({ id: this.message.id });
  }

  onAnimationEvent(event: AnimationEvent): void {
    console.log(
      `Animation ${event.phaseName}: ${event.fromState} => ${event.toState}`
    );
  }
}
