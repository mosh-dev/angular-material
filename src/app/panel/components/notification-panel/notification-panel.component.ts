import {Component} from '@angular/core';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.scss']
})
export class NotificationPanelComponent {
  messages = [
    {
      from: 'Tushar',
      subject: 'Example Subject',
      content: 'Hellow Era...',
      ...{
        icon: 'sms', color: 'orange600'
      }
    },
    {
      from: 'Era',
      subject: 'Example Subject',
      content: 'Hellow Mr',
      ...{
        icon: 'power', color: 'blueviolet'
      }
    },
    {
      from: 'Galib',
      subject: 'Example Subject',
      content: 'Doctor shaheb kemon asen',
      ...{
        icon: 'notifications', color: 'fb4400'
      }
    },
    {
      from: 'Rocky',
      subject: 'Example Subject',
      content: 'Are vai koyen na. choltase konorokom',
      ...{
        icon: 'person',
        color: 'blue'
      }
    },
  ];
}
