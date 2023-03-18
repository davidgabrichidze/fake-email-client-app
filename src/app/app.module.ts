import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrototypeUiModule, TooltipModule } from './directives';
import { HeaderComponent } from './header/header.component';
import { InboxPageComponent } from './inbox-page/inbox-page.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { MessageContentComponent } from './message-content/message-content.component';
import { MessageListItemComponent } from './message-list-item/message-list-item.component';
import { MessageViewComponent } from './message-view/message-view.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { TimeAgoModule, TruncatePipeModule } from './pipes';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrototypeUiModule,
    TimeAgoModule,
    TruncatePipeModule,
    TooltipModule,
  ],
  declarations: [
    AppComponent,
    InboxPageComponent,
    MenuSidebarComponent,
    MessagesListComponent,
    MessageContentComponent,
    HeaderComponent,
    MessageListItemComponent,
    MessageViewComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
