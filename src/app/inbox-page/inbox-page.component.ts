import { Component, OnInit } from '@angular/core';
import { MessageListService } from '../services';

@Component({
  selector: 'app-inbox-page',
  templateUrl: './inbox-page.component.html',
  styleUrls: ['./inbox-page.component.scss'],
})
export class InboxPageComponent implements OnInit {
  items$ = this.service.find({ location: 'inbox' });

  lastUpdated = new Date();

  constructor(private service: MessageListService) {}

  ngOnInit() {}

  onFilterChanged(filters) {
    this.items$ = this.service.find(filters);
  }

  onMessageClicked(message: { id: string; query }) {
    this.service.markAsRead(message.id).subscribe();
  }
}
