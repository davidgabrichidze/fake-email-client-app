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
import { debounceTime } from 'rxjs';

import { MessageListService } from '../services/message-list.service';

@Component({
  selector: 'app-messages-list-form-group',
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
export class MessagesListFormGroupComponent implements OnInit, OnChanges {
  @Input() items: any[] = [];

  @Output() filterChanged = new EventEmitter<any>();

  @Output() messageClicked = new EventEmitter<any>();

  formGroup = new FormGroup({
    search: new FormControl(),
    location: new FormControl(null, [Validators.required]),
  });

  constructor() {
    this.formGroup.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      this.filterChanged.emit({
        query: value.search,
        location: value.location,
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
