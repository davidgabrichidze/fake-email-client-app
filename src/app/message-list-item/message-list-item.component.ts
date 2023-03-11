import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-list-item',
  templateUrl: './message-list-item.component.html',
  styleUrls: ['./message-list-item.component.scss'],
})
export class MessageListItemComponent {
  @Input() message: any;
}
