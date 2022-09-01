import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Favoritos', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Mensaje', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Ayuda', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Nosotras', url: '/folder/Archived', icon: 'archive' },
    { title: 'Modificar datos de cuenta', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
