import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';

import { MessageListService } from '../services/message-list.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
  providers: [MessageListService],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter',
          stagger('100ms', [animate('500ms ease-in', style({ opacity: 1 }))]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class MessagesListComponent implements OnInit, OnChanges {
  @Input() items: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on changes called', changes);
  }
  ngOnInit(): void {
    console.log('ng on init called');
  }
}
