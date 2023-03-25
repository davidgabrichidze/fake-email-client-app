import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
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
import { apiUrlInjectionToken } from './services/api-url-injection-token';
import { MatInputModule } from '@angular/material/input';
import {
  MatFormField,
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesListFormControlComponent } from './messages-list-form-controls/messages-list.component';
import { MessagesListFormGroupComponent } from './messages-list-form-group/messages-list.component';

@NgModule({
  imports: [
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Material Modules
    MatInputModule,
    MatFormFieldModule,

    // Application Modules
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
    MessagesListFormControlComponent,
    MessagesListFormGroupComponent,
    MessageContentComponent,
    HeaderComponent,
    MessageListItemComponent,
    MessageViewComponent,
  ],
  providers: [
    {
      provide: apiUrlInjectionToken,
      useValue: environment.apiUrl,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
