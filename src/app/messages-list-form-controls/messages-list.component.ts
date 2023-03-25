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
  selector: 'app-messages-list-form-control',
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
export class MessagesListFormControlComponent implements OnInit, OnChanges {
  @Input() items: any[] = [];

  @Output() filterChanged = new EventEmitter<any>();

  @Output() messageClicked = new EventEmitter<any>();

  searchControl = new FormControl();
  locationControl = new FormControl('inbox');

  constructor() {
    this.searchControl.valueChanges.subscribe((value) => {
      this.filterChanged.emit({
        query: value,
        location: this.locationControl.value,
      });
    });

    this.locationControl.valueChanges.subscribe((value) => {
      this.filterChanged.emit({
        query: this.searchControl.value,
        location: value,
      });
    });
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
}
