import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrlInjectionToken } from './api-url-injection-token';

@Injectable({
  providedIn: 'root',
})
export class MessageListService {
  constructor(
    @Inject(apiUrlInjectionToken) private apiUrl: string,
    private http: HttpClient
  ) {}

  find(filters?) {
    return this.http.post<any[]>(`${this.apiUrl}/api/emails/find`, {
      ...filters,
    });
  }

  findOne(id: string) {
    return this.http.get(`${this.apiUrl}/api/emails/${id}`);
  }

  save(email: any) {
    return this.http.post(`${this.apiUrl}/api/emails/save`, email);
  }

  delete(id: string) {
    return this.http.delete(`${this.apiUrl}/api/emails/${id}`);
  }

  send(id: string) {
    return this.http.post(`${this.apiUrl}/api/emails/send`, { id });
  }

  markAsRead(id: string) {
    return this.http.patch(`${this.apiUrl}/api/emails/${id}/mark-as-read`, {});
  }

  markAsUnread(id: string) {
    return this.http.patch(
      `${this.apiUrl}/api/emails/${id}/mark-as-unread`,
      {}
    );
  }
}
