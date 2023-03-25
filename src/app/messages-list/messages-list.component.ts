import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  @Output() filterChanged = new EventEmitter<any>();

  @Output() messageClicked = new EventEmitter<any>();

  private _search = '';

  get search() {
    return this._search;
  }
  set search(value: string) {
    this._search = value;
    this.fireEvent();
  }

  private _location = 'inbox';

  get location() {
    return this._location;
  }
  set location(value: string) {
    this._location = value;
    this.fireEvent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on changes called', changes);
  }

  ngOnInit(): void {
    console.log('ng on init called');
  }

  onMessageClicked(event: { id: string }) {
    this.messageClicked.emit(event);

    this.items.find((item) => item.id === event.id).readAt = new Date();
  }

  private fireEvent() {
    this.filterChanged.emit({
      query: this.search,
      location: this.location,
    });
  }
}
