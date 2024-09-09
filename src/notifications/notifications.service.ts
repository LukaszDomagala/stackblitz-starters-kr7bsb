import { Injectable } from '@angular/core';
import { interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  getNotifications() {
    return interval(1000).pipe(
      map(id => ({
        id,
        createdAt: new Date().toISOString(),
        content: `Notificaiton #${id}`
      })),
    )
  }
}
