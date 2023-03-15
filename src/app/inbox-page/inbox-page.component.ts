import { Component, OnInit } from '@angular/core';
import { EmailStorageService } from '../services';

@Component({
  selector: 'app-inbox-page',
  templateUrl: './inbox-page.component.html',
  styleUrls: ['./inbox-page.component.scss'],
})
export class InboxPageComponent implements OnInit {
  items = [];

  lastUpdated = new Date();

  constructor(private emailService: EmailStorageService) {}

  ngOnInit() {
    this.items = this.emailService.find();
  }
}
