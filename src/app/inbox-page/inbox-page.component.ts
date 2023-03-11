import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox-page',
  templateUrl: './inbox-page.component.html',
  styleUrls: ['./inbox-page.component.scss'],
})
export class InboxPageComponent {
  items = [
    {
      id: 1,
      title: 'Inbox item 1',
      selected: false,
      subtitle: 'Subtitle 1',
      description: 'Description 1',
      date: new Date(),
    },
    {
      id: 2,
      title: 'Inbox item 2',
      selected: false,
      subtitle: 'Subtitle 2',
      description: 'Description 2',
    },
  ];

  lastUpdated = new Date();
}
