import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MessageListService } from '../services/message-list.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
  providers: [MessageListService],
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
